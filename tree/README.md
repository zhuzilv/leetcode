# 二叉树



## 1. 层序遍历 （队列）

https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/description/
```javascript
var decorateRecord = function(root) {
    let ans = [],queue = [root];
    while(queue.length){
        let top = queue.shift();
       top&& ans.push(top?.val)
         top?.left&&queue.push(top?.left);
         top?.right&&queue.push(top?.right);
    }
    return ans;
};
```

## 2.  dfs / 层序遍历  把层序当成数组推入结果

https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/description/

```javascript
var decorateRecord = function(root) {
    let ans = [],queue = [root];
    while(queue.length){
        let top = queue.shift();
       top&& ans.push(top?.val)
         top?.left&&queue.push(top?.left);
         top?.right&&queue.push(top?.right);
    }
    return ans;
};
```
> dfs
``` javascript
var decorateRecord = function(root) {
    if (!root) return [];
    const result = new Array();
    function dfs(node, level) {
        if (!result[level]) {
            result[level] = [node.val];
        } else {
            result[level].push(node.val);
        }
        if (node.left) dfs(node.left, level + 1);
        if (node.right) dfs(node.right, level + 1);
    }
    dfs(root, 0);
    return result;
};
```

## 3. dfs / 层序 同题目二，但z字打印，判断奇偶

https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/description/

```javascript
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var decorateRecord = function (root) {
    // let asc = false;
    let level =0;
    // 定义结果集
    let ans = [];
    // 推下头
    root && ans.push([root?.val])
    function recursion(res) {
        if (res.length == 0) return [];
        let item = []
        // recursion
        let times = res.length;
        while (times--) {
            let l = res[0]?.left;
            let r = res[0]?.right;
            l && res.push(l) && item.push(l?.val);
            r && res.push(r) && item.push(r?.val);
            res.shift();
        }
        
        item?.length && ans.push(level%2!==0?item:item.reverse());
        level++;
        recursion(res)
    }
    root && recursion([root])

    return ans;
};
```
> dfs
``` javascript
var decorateRecord = function(root) {
    if (!root) return [];
    const result = new Array();
    function dfs(node, level) {
        if (!result[level]) {
            result[level] = [node.val];
        } else {
            if ((level & 1) === 0) {
                result[level].push(node.val);
            } else {
                result[level].unshift(node.val);
            }
        }
        if (node.left) dfs(node.left, level + 1);
        if (node.right) dfs(node.right, level + 1);
    }
    dfs(root, 0);
    return result;
};
```

## 3. 子结构判断 （hard）

https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/

```javascript
// ab 两树判断相等
function dfs(a,b){
    // 如果节点相同 且没右树 则直接为true
    if(!b) return true;
    // 左树不相同则 false
    if(!a) return false;
    if(a.val!==b.val) return false;
    return dfs(a.left,b.left)&&dfs(a.right,b.right)
}
var isSubStructure = function(a,b) {
    if(!a||!b){
        return false;
    }
    return dfs(a,b)||isSubStructure(a.left,b)||isSubStructure(a.right,b)
};
```

## 4. 翻转二叉树

https://leetcode.cn/problems/invert-binary-tree/description/


```javascript
var invertTree = function (root) {
    if(!root) return root;
    [root.left,root.right]=[root.right,root.left]
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
```

## 5. 对称二叉树
https://leetcode.cn/problems/symmetric-tree/

```javascript 
var isSymmetric = function(root) {
    function isEqual(p,q){
        if (p?.val!==q?.val) {
            return false;
        }
         if (!p&&!q) {
            return true;
        }
       return isEqual(p.left,q.right)&&isEqual(p.right,q.left);
    }
    return isEqual(root?.left,root?.right)
};
```

## 6. 将二叉搜索树转化为排序的双向链表
https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/description/

```javascript 

var treeToDoublyList = function (root) {
    if (!root) {
        return null;
    }
    // 取到头
    let head = null;
    // 定义前置节点指针
    let pre = null

    function dfs(cur) {
        if (!cur) {
            return null;
        }
        dfs(cur.left);
        // 中序
        if(!head){
            // 赋予头节点
            head = new Node(cur.val);
            // pre初始化
            pre = head;
        }else{
            let node = new Node(cur.val)
            // 双向链表 绑定
            pre.right=node;
            node.left=pre;
            // pre移动
            pre=node;
        }
        dfs(cur.right);

    }

    dfs(root);
    //pre 走到尾
    // 首位连环
    head.left = pre;
    pre.right = head;
    // 返回头
    return head;
};
```


## 7. 寻找二叉搜索树中的目标节点
https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/description/

```javascript 
var findTargetNode = function (root, cnt) {
    //  方法3 融合进入参数里
    // 同法2 只是参数移入
        let ans ;
       function dfs(cur,n){
           // 判断ans 存在直接归出
           if(!cur||ans) return n;
            //改n
           n = dfs(cur.right,n);
            //中序行为
           n--;
           if(n==0){
               ans =cur.val
           }
           // 改n
           n = dfs(cur.left,n);
           return n;
       }
        dfs(root,cnt)
        return ans;
};
```


## 8. 计算二叉树深度
https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

官方：自底向上
```javascript 
var calculateDepth = function(root) {
    if (!root) return 0;
    return Math.max(calculateDepth(root.left), calculateDepth(root.right)) + 1;
};
```

先序找最大
```javascript 
var calculateDepth = function(root) {
    let max = 0;
    function dfs(cur,n){
        if(!cur){
           return max = Math.max(max,n);
        }
        n++;
        dfs(cur.left,n);
        dfs(cur.right,n);
    }
    dfs(root,0)
    return max
};
```

## 9. 平衡二叉树
https://leetcode-cn.com/problems/balanced-binary-tree/

```javascript 
var isSymmetric = function(root) {
    function isEqual(p,q){
        if (p?.val!==q?.val) {
            return false;
        }
         if (!p&&!q) {
            return true;
        }
       return isEqual(p.left,q.right)&&isEqual(p.right,q.left);
    }
    return isEqual(root?.left,root?.right)
};
```
官方：递归
```c++
class Solution {
public:
    int height(TreeNode* root) {
        if (root == NULL) {
            return 0;
        } else {
            return max(height(root->left), height(root->right)) + 1;
        }
    }

    bool isBalanced(TreeNode* root) {
        if (root == NULL) {
            return true;
        } else {
            return abs(height(root->left) - height(root->right)) <= 1 && isBalanced(root->left) && isBalanced(root->right);
        }
    }
};

```
## 10. 求二叉搜索树的最近公共祖先
https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/


```javascript 
// 递归法：
var lowestCommonAncestor = function(root, p, q) {
    // 使用递归的方法
    // 1. 使用给定的递归函数lowestCommonAncestor
    // 2. 确定递归终止条件
    if(root === null) {
        return root;
    }
    if(root.val > p.val && root.val > q.val) {
        // 向左子树查询
         return root.left = lowestCommonAncestor(root.left,p,q);
    }
    if(root.val < p.val && root.val < q.val) {
        // 向右子树查询
        return root.right = lowestCommonAncestor(root.right,p,q);
    }
    return root;
};

```


## 11. 求二叉树的最近公共祖先
https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/


```javascript 
var lowestCommonAncestor = function(root, p, q) {
    // 定义返回值
    let value;
    //递归返回子节点 是否查到状态

    function dfs(cur){
        // 标准后序遍历行为
        if(!cur)return false;
        let l = dfs(cur.left);
        let r = dfs(cur.right);
        // 如果当前节点是查找对象，返回true/false
        let item =[p.val,q.val].includes(cur.val);
        // 如果左子和右子是查找则 赋值value
        if(l&&r){
            value = cur;
        // 如果左子和右子中有一个与当前节点构成 赋值value
        }else if((l||r)&&item){
            value = cur;
        }
        // 返回值控制部分 ，如果是查找的值则返回true，左右合并节点
        // 如果当前点是查找的值返回true
        if([p.val,q.val].includes(cur.val)){
            return true;
        }
        // 否则返回左右节点 逻辑或
        return l||r
    }
    dfs(root)
    return value;
};
```
官方
```javascript
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left === null) return right;
    if (right === null) return left;
    return root;
};
```


## 12. 序列化与反序列化二叉树
https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/


```javascript 
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function dfs(root, str) {
    if (!root) {
        return str += '#,'
    }
    str += root.val.toString() + ','
    str = dfs(root.left, str);
    str = dfs(root.right, str);
    return str;
}
var serialize = function (root) {
    // 1,2,#,#,3,4,5
    return dfs(root, '')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
 const rdeserialize = (dataList) => {
    if (dataList[0] === "#") {
        dataList.shift();
        return null;
    }

    const root = new TreeNode(parseInt(dataList[0]));
    dataList.shift();
    root.left = rdeserialize(dataList);
    root.right = rdeserialize(dataList);

    return root;
}

var deserialize = function (data) {
    // 1,2,#,#,3,4,#,#,5,#,#
     const dataArray = data.split(",");
    return rdeserialize(dataArray);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```