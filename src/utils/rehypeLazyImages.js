import { visit } from 'unist-util-visit';

/**
 * Rehype plugin that adds loading="lazy" and decoding="async" to all <img> elements.
 */
export function rehypeLazyImages() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        node.properties.loading = node.properties.loading || 'lazy';
        node.properties.decoding = node.properties.decoding || 'async';
      }
    });
  };
}
