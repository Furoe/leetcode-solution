/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head || !head.next) return null;
    let slow = fast = head;
    while(fast && fast.next){
    	fast = fast.next.next;
    	slow = slow.next;
    	if(slow == fast) {
    		slow = head;
    		while(slow !== fast){
    			slow = slow.next;
    			fast = fast.next;
    		}
    		return slow;
    	}

    }
    return null;
};