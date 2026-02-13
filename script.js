const byteSize = (str) => {
  // Use TextEncoder to get bytes of string
  return new TextEncoder().encode(str).length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
