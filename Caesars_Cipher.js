function rot13(str) {
  let input = "NOPQRSTUVWXYZABCDEFGHIJKLM"
  let output = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let result = ""

  str = str
        .split("")
        .map(function(char) {
          if (input.includes(char)){
            return output[input.indexOf(char)]
          } else {
            return char
          }
        })
        .join("")
  
  return str;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
