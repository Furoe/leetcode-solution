function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 /**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let temp = new ListNode(0);
    temp.next = head;
    let p = head;
    while(p != null){
    	length++;
    	p = p.next;
    }
    length -= n;
    p = temp;
    while(length > 0){
    	length--;
    	p = p.next;
    }
    p.next = p.next.next;
    return temp.next;
};