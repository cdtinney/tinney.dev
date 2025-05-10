import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Popover from 'react-tiny-popover';
import HamburgerMenu from 'react-hamburger-menu';

import Brand from '../Brand';

import classes from './PageHeader.module.css';

const portalElement = typeof document !== 'undefined'
  ? document.getElementsByTagName('body')[0]
  : null;

function BackgroundOverlay({
  visible,
}) {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(75, 75, 75)',
        opacity: visible ? 0.75 : 0,
        transition: 'opacity 0.2s ease-in-out',
        pointerEvents: 'none',
      }}
    />
  );
}

BackgroundOverlay.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default class PageHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    titleHref: PropTypes.string,
  };

  static defaultProps = {
    titleHref: null,
  };

  state = {
    popoverVisible: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  handleWindowResize = () => this.hidePopover();

  handleWindowScroll = () => this.hidePopover();

  handleMenuClick = () => this.hidePopover();

  hidePopover = () => this.handlePopoverVisibility(null, false);

  handlePopoverVisibility = (event, visible) => {
    const { popoverVisible } = this.state;
    this.setState({
      popoverVisible: visible !== undefined
        ? visible
        : !popoverVisible,
    });
  };

  render() {
    const {
      popoverVisible,
    } = this.state;

    const {
      title,
      titleHref,
    } = this.props;

    const getMenuItems = className => (
      <React.Fragment>
        <Link
          to="/blog"
          className={className}
        >
          blog
        </Link>
        <Link
          to="/projects"
          className={className}
        >
          projects
        </Link>
      </React.Fragment>
    );

    return (
      <header className={classes.header}>
        {
          portalElement
          && ReactDOM.createPortal(
            <BackgroundOverlay visible={popoverVisible} />,
            portalElement,
          )
        }
        <Brand underline={false} className={classes.brand} />
        <span className={classes.separator}>
          /
        </span>
        <h3 className={classes.title}>
          {titleHref
            ? (
              <div className={classes.titleLink}>
                { title }
              </div>
            )
            : title
          }
        </h3>
        <span className={classes.desktopMenu}>
          {getMenuItems(classes.desktopMenuItem)}
        </span>
        <span className={classes.mobileMenu}>
          <Popover
            isOpen={popoverVisible}
            content={(
              <div className={classes.popoverMenu}>
                {getMenuItems(classes.popoverMenuItem)}
              </div>
            )}
            onVisibleChange={this.handlePopoverVisibility}
            containerStyle={{
              overflow: 'visible',
            }}
            position="bottom"
            windowBorderPadding={0}
            contentLocation={{
              top: 50,
              left: 0,
            }}
            transitionDuration={0.25}
            onClickOutside={this.hidePopover}
          >
            <HamburgerMenu
              isOpen={popoverVisible}
              menuClicked={this.handlePopoverVisibility}
              width={24}
              height={20}
              strokeWidth={1}
              style={{
                padding: '1px 0',
              }}
              containerStyle={{
                padding: '1px 0',
              }}
              color={popoverVisible ? 'white' : 'black'}
            />
          </Popover>
        </span>
      </header>
    );
  }
}
