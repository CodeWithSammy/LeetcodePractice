
var MyStack = function () {
  // Initialize two empty queues
  this.q1 = [];
  this.q2 = [];
};

// Method to push an element onto the stack
MyStack.prototype.push = function (x) {
  // Move all elements from q1 to q2
  while (this.q1.length !== 0) {
    this.q2.push(this.q1.shift());
  }
  // Add the new element to the empty q1
  this.q1.push(x);
  // Move all elements from q2 back to q1 to maintain stack order
  while (this.q2.length !== 0) {
    this.q1.push(this.q2.shift());
  }
};

// Method to pop the top element from the stack
MyStack.prototype.pop = function () {
  // Remove and return the top element from q1
  return this.q1.shift();
};

// Method to return the top element of the stack without removing it
MyStack.prototype.top = function () {
  // Return the first element in q1 (top of the stack)
  return this.q1[0];
};

// Method to check if the stack is empty
MyStack.prototype.empty = function () {
  // Check if q1 is empty
  return this.q1.length === 0;
};


/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */