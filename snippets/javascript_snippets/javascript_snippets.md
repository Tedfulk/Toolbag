# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Function to check if a given string is a palindrome](#function-to-check-if-a-given-string-is-a-palindrome)
  - [Function to generate a random integer between two values](#function-to-generate-a-random-integer-between-two-values)
  - [Function to shuffle an array](#function-to-shuffle-an-array)
  - [Function to capitalize the first letter of each word in a string](#function-to-capitalize-the-first-letter-of-each-word-in-a-string)
  - [Function to remove duplicates from an array](#function-to-remove-duplicates-from-an-array)
  - [Function to get the current date in a specified format](#function-to-get-the-current-date-in-a-specified-format)

## Function to check if a given string is a palindrome

```javascript
function isPalindrome(str) {
Convert string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
Reverse the string and compare to original
  return str === str.split('').reverse().join('');
}
```

## Function to generate a random integer between two values

```javascript
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

## Function to shuffle an array

```javascript
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
```

## Function to capitalize the first letter of each word in a string

```javascript
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}
```

## Function to remove duplicates from an array

```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
```

## Function to get the current date in a specified format

```javascript
function formatDate(format) {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return format
    .replace("YYYY", year)
    .replace("MM", month)
    .replace("DD", day)
    .replace("hh", hours)
    .replace("mm", minutes)
    .replace("ss", seconds);
}
```
