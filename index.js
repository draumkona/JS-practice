function toCamelCase(str) {
  let newStr = "";
  let finalWords = "";
  let stor = "";

  let words = str.split(/[.\*+-/_]/);

  for (let i = 1; i < words.length; i++) {
    newStr = words[i];
    stor = newStr.charAt(0).toUpperCase() + newStr.slice(1);
    finalWords += stor;
  }
  return words[0] + finalWords;
}

console.log(toCamelCase("the_stealth_warrior")); // theStealthWarrior
console.log(toCamelCase("The_Stealthhhh-Warrior")); // TheStealthWarrior
