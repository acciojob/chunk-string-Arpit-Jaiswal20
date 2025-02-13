function stringChop(str, size) {
  // your code here
	if (!str) return []; // Handle null or empty string case
    
    let val = [];
    let i = 0;

    while (i < str.length) {
        let temp = "";
        let end = Math.min(i + size, str.length); // Ensure we don't go out of bounds

        while (i < end) {
            temp += str[i];
            i++;
        }

        val.push(temp);
    }

    return val;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
