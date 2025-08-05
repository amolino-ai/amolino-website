
// lib/remark-remove-frontmatter.js
export default function remarkRemoveFrontmatter() {
  return (tree) => {
    // Filter out YAML frontmatter nodes
    tree.children = tree.children.filter(node => node.type !== 'yaml')
  }
}