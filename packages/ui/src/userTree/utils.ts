import type { TreeNode } from './type'

export function traverseTree(node: TreeNode, callback: any) {
  if (node.children) {
    node.children.forEach((child) => {
      traverseTree(child, callback)
    })
  }
  callback(node)
}
//traverse tree by tree type
export function traverseTreeByType(node: TreeNode, type: 0 | 1, callback: any) {
  if (node.children) {
    node.children.forEach((child) => {
      traverseTreeByType(child, type, callback)
    })
  }
  if (node.type === type) {
    callback(node)
  }
}

export function traverseNodeList(nodeList: TreeNode[], callback: any) {
  nodeList.forEach((node) => {
    traverseTree(node, callback)
  })
}

//get all checked nodes from nodeList
export function getCheckedNodes(nodeList: TreeNode[]) {
  let checkedNodes: TreeNode[] = []
  nodeList.forEach((node) => {
    if (node.checked) {
      checkedNodes.push(node)
    }
    if (node.children) {
      checkedNodes = checkedNodes.concat(getCheckedNodes(node.children))
    }
  })
  return checkedNodes
}
