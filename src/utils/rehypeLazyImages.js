import { visit } from 'unist-util-visit';

function addLazyAttributes(node) {
  if (node.tagName === 'img') {
    node.properties.loading = node.properties.loading || 'lazy';
    node.properties.decoding = node.properties.decoding || 'async';
  }
}

function transform(tree) {
  visit(tree, 'element', addLazyAttributes);
}

/**
 * Rehype plugin that adds loading="lazy" and decoding="async" to all <img> elements.
 */
export function rehypeLazyImages() {
  return transform;
}
