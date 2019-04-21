import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Popover from 'react-tiny-popover';
import HamburgerMenu from 'react-hamburger-menu';

import Brand from '../Brand';
import Anchor from '../Anchor';

import classes from './PageHeader.module.css';

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

    return (
      <header className={classes.header}>
        <span className={classes.brandContainer}>
          <Brand underline={false} />
        </span>
        <span className={classes.titleContainer}>
          <span className={classes.separator}>
            {'/'}
          </span>
          <h3 className={classes.title}>
            {titleHref
              ? (
                <Anchor className={classes.titleLink} href={titleHref}>
                  { title }
                </Anchor>
              )
              : title
            }
          </h3>
        </span>
        <span className={classes.menuIconContainer}>
          <Popover
            isOpen={popoverVisible}
            content={(
              <div className={classes.popoverMenu}>
                <Link
                  to="/about"
                  className={classes.popoverMenuItem}
                >
                  about
                </Link>
                <Link
                  to="/blog"
                  className={classes.popoverMenuItem}
                >
                  blog
                </Link>
                <Link
                  to="/projects"
                  className={classes.popoverMenuItem}
                >
                  projects
                </Link>
              </div>
            )}
            onVisibleChange={this.handlePopoverVisibility}
            containerStyle={{
              overflow: 'visible',
            }}
            position="bottom"
            align="end"
            transitionDuration={0.25}
            onClickOutside={this.hidePopover}
          >
            <HamburgerMenu
              isOpen={popoverVisible}
              menuClicked={this.handlePopoverVisibility}
              width={24}
              height={20}
              strokeWidth={1}
            />
          </Popover>
        </span>
      </header>
    );
  }
}
