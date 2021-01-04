# BigO notation

[BigO Cheat Sheet](https://www.bigocheatsheet.com/)

#### How long do we need to wait to performe a task?

![BigO Complexity Chart](big-o-complexity-chart.jpg)

## Rule book
1. Worst case
    * We always care about what is the worst case scenario.
    * If we talk about the bigO we talk about worst case scenario.
2. Remove constants
    * O(4+4n) == O(n)
3. Different terms for input
    * Different BigO if there are many inputs
    * Any step that happens one after another --> O(a+b)
    * Any step that happens with indentation that is nestged --> O(a*b)
4. Drop non dominants
    * O(n + n^2) == O(n^2)

# Big O Cheat Sheet:

#### Big Os

* O(1) Constant- no loops
* O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
* O(n) Linear- for loops, while loops through n items
* O(n log(n)) Log Liniear- usually sorting operations
* O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Twonested loops
* O(2^n) Exponential- recursive algorithms that solves a problem of size N
* O(n!) Factorial- you are adding a loop for every element

Iterating through half a collection is still O(n)
Two separate collections: O(a * b)

#### What can cause time in a function?

* Operations (+, -, *, /)
* Comparisons (<, >, ==)
* Looping (for, while)
* Outside Function call (function())

#### What causes Space complexity?

* Variables
* Data Structures
* Function 
* CallAllocations