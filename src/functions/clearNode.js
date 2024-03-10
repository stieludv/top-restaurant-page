// Remove all child noes, if any, of given node

const clearNode = (node) => {
    node.querySelectorAll('*').forEach(n => n.remove());
}

export default clearNode;