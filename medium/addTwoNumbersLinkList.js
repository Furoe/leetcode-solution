/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 function ListNode(val){
 	this.val = val;
 	this.next = null;
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbersLinkList = function(l1, l2) {
	let p1 = l1;
	let p2 = l2;
	let l3 = new ListNode(null);
	let p3 = l3;
	let count = 0;
	while(true){
		let val = (p1?p1.val:0) + (p2?p2.val:0) + count;
		count = Math.floor(val/10);
		p3.next = new ListNode(val%10);
		p3 = p3.next;
		if(p1) p1 = p1.next;
		if(p2) p2 = p2.next;
		if(!p1 && !p2 && !count) break;
	}
	return l3.next;
};