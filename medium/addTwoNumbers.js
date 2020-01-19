/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	let p1 = l1;
	let p2 = l2;
	while((p1 !== null) && (p2 !== null)){
		if((p1.val + p2.val) >= 10){
			if((p1.next === null) && (p2.next !== null)){
				p2.next.val += 1;
				p1.val = (p1.val + p2.val)%10;
				p1.next = p2.next;
				return sortListNode(l1);
			}else if((p1.next !== null) && (p2.next === null)){
				p1.next.val += 1;
				p1.val = (p1.val + p2.val)%10;
			}else if((p1.next !== null) && (p2.next !== null)){
				p1.next.val += 1;
				p1.val = (p1.val + p2.val)%10;
			}else if((p1.next === null) && (p2.next === null)){
				p1.next = new ListNode(1);
				p1.val = (p1.val + p2.val)%10;
			}
		}else{
			if((p1.next === null) && (p2.next !== null)){
				p1.val = p1.val + p2.val;
				p1.next = p2.next;
				return sortListNode(l1);
			}else{
				p1.val = p1.val + p2.val;
			}
		}
		p1 = p1.next;
		p2 = p2.next;
	}
	 
	return sortListNode(l1); 
};
function sortListNode(test){
	let p3 = test;
	while(p3){
		if(p3.val >= 10 && p3.next !== null){
			p3.next.val += Math.floor(p3.val/10);
			p3.val = p3.val%10;
		}else if(p3.val >= 10 && p3.next === null){
			p3.next = new ListNode(Math.floor(p3.val/10));
			p3.val = p3.val%10;
		}
		p3 = p3.next;
	}
	return test;
}