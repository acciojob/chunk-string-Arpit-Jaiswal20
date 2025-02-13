function stringChop(str, size) {
  // your code here
	let val = [];
    let i = 0;
    while(i<str.length)
    {
        let s = i + size;  
        let temp = "";
        
        while (i < s && i < str.length) { 
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
