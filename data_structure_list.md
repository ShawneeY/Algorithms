## Stack
- FILO

## Linked List
nested objects with value and pointer to the next
https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571

- Merge 
  
  Have a fake list as merge_head and a current list point equal to merge_head. Traverse through
  current and compare each value from both list and point to greater value of the two. 

- Delete given node
  Edge cases: 
  - []
  - [1]
  - [1,1,1,1]
  Have a variable point to one node prev to the first node, have current point to head node. current val compare to given val, compare to give val. move head if node at the begaining of the list

- Cycled
  
  two pointer check if fast eventually catches the slow one

- Reverse
  
  next = current.next; // get the node of non reversed current next
  current.next = prev; // turn around the arrow
  prev = current;// move prev forward
  current = next; // move current forward

  gif: https://www.geeksforgeeks.org/reverse-a-linked-list/

- Palindrome:
  second half reverse and compare each.



  