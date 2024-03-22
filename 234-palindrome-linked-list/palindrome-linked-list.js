/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let fast = head;
    let slow = head;

    // # find the middle (slow)
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    // # reverse second half
    let curr = slow;
    let prev = null;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    let head2 = prev;

    // compare both halfs
    while (head && head2) {
        if (head.val !== head2.val) {
            return false;
        }

        head = head.next;
        head2 = head2.next;
    }

    return true;

};