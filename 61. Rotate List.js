function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return head;
    const L = getLength(head);
    const n = k % L;
    let node = head;
    if (!n) return head;
    for (let i = 0; i < L - n - 1; i++) {
        node = node.next;
    }
    let temp = node.next;
    let oldHead = head;
    head = temp;
    node.next = null;
    while(temp.next) {
        temp = temp.next;
    }
    temp.next = oldHead;
    return head;
};

var getLength = function (head) {
    let len = 0;
    while (head) {
        len++;
        head = head.next;
    }
    return len;
};
