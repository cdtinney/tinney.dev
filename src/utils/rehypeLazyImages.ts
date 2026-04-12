import { visit } from 'unist-util-visit';
import type { Element, Root } from 'hast';

function addLazyAttributes(node: Element) {
  if (node.tagName === 'img') {
    node.properties.loading = node.properties.loading || 'lazy';
    node.properties.decoding = node.properties.decoding || 'async';
  }
}

function transform(tree: Root) {
  visit(tree, 'element', addLazyAttributes);
}

export function rehypeLazyImages() {
  return transform;
}
