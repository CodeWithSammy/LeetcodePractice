/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let current = list1;
    let i =0;
    while ( i< a-1){
        current = current.next;
        i+=1;
    }
    let head = current;

    while ( i <= b){
        current = current.next;
        i+=1;
    }
    head.next = list2;

    while( list2.next){
        list2= list2.next;

    }
    list2.next = current;
    return list1;
};