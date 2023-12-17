function stringChop(str, size) {
  // your code here
	if (str == null)
return [];
str = String(str);
return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];

}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
