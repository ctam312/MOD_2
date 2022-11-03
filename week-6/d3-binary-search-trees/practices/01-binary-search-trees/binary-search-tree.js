// Do not change this
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val, currentNode = this.root) {
		const newNode = new TreeNode(val);

		if (!currentNode) {
			this.root = newNode;
			return this;
		}

		if (val < currentNode.val) {
			if (!currentNode.left) {
				currentNode.left = newNode;
			} else {
				return this.insert(val, currentNode.left);
			}
		}
		if (val > currentNode.val) {
			if (!currentNode.right) {
				currentNode.right = newNode;
			} else {
				return this.insert(val, currentNode.right);
			}
		}
	}

  // insert(val, currentNode = this.root) {
  //   const newTreeNode = new TreeNode(val);
  //   if (this.root === null) {
  //     this.root = newTreeNode;
  //     return;
  //   }
  //   if (currentNode.val < newTreeNode.val) {
  //     if (currentNode.right === null) {
  //       currentNode.right = newTreeNode;
  //     } else {
  //       return this.insert(val, currentNode.right)
  //     }
  //   } else {
  //     if (currentNode.left === null) {
  //       currentNode.left = newTreeNode;
  //     } else {
  //       return this.insert(val, currentNode.left)
  //     }
  //   }
  // }



	search(val) {
		// Your code here
		if (!this.root) {
			return false;
		}
		let curr = this.root;
		while (curr) {
			if (curr.val === val) {
				return true;
			}
			if (curr.val < val) {
				curr = curr.right;
			} else {
				curr = curr.left;
			}
		}
		// if(curr.val === val){
		//   return true;
		// }
		return false;
	}

	preOrderTraversal(currentNode = this.root) {
		if (currentNode) {
			console.log(currentNode.val);
			this.preOrderTraversal(currentNode.left);
			this.preOrderTraversal(currentNode.right);
		}
	}

	inOrderTraversal(currentNode = this.root) {
		if (currentNode){
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right)
    }
	}

	postOrderTraversal(currentNode = this.root) {
		if (currentNode){
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
	}

	// Breadth First Traversal - Iterative
	breadthFirstTraversal() {
		// your code here
    //gonna use queue
    //if(!this.root) return
    let q = [this.root];
    while(q.length){
      let tmp = q.pop()
      console.log(tmp.val);
      if (tmp.left){
        q.unshift(tmp.left);
      }
      if (tmp.right){
        q.unshift(tmp.right);
      }
    }
	}

	// Depth First Traversal - Iterative
	depthFirstTraversal() {
		// your code here
    //gonna use a stack (push and pop)
    let q = [this.root];
    while(q.length){
      let tmp = q.pop()
      console.log(tmp.val);
      if (tmp.left){
        q.push(tmp.left);
      }
      if (tmp.right){
        q.push(tmp.right);
      }
    }
	}
}

module.exports = { BinarySearchTree, TreeNode };
