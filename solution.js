//reverse a string

function reverse(str) {
  if (str.length === 0) return str;
  return reverse(str.slice(1)) + str[0];
}

const string = "hello world";
console.log(reverse(string));
reverse(string); // return dlrow olleh
