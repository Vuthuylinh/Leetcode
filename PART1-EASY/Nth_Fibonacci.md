# Nth Fibonacci
The Fibonacci sequence is defined as follow:
The first number of the sequence is 0
The second number of the sequence is 1
and the nth number is the sum of the `(n-1)th + (n-2)th` numbers.
Write a function that takes in an integer `n` and return the nth Fibonacci number.

Important note: The Fibonacci sequence is often defined with its firs two numbers as F0=0; F1=1.
For the purpase of this question, the first Fiboacci number is F0=0, therefore, getNFib(1)= F0,
getNFib(2)=F1

# Approach

Fn= F(n-1) + F(n-2)

# Solution: Time O (n^2), Space: O(1)
function getNFib(n){
  const lastTwo=[0,1]
  let counter =3
  while(counter<=n){
    let nextFib=lastTwo[0]+ lastTwo[1]
    lastTwo[0]=lastTwo[1]
    lastTwo[1]=nextFib
    counter++
  }
  return n>1?lastTwo[1]: lastTwo[0]
}
