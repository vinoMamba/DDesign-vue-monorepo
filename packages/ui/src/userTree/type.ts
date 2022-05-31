export interface TreeNode {
  id: string
  name: string
  type: 0 | 1 // 0: 部门，1: 人员
  peopleCount: number
  avatar: string | null
  checked: boolean
  children: TreeNode[]
}
