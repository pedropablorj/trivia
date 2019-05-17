//Write the pseudocode of a function, which takes as input a String, and returns True if it is palindrome, or False otherwise.
// O(n)
const isPalindrome = w => {
    const r = w.split('').reverse().join('');

    return w === r;
}

