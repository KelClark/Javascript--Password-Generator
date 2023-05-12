// Assignment code here

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  passwordText.value = password;

}
// Generate password prompts w/ variables

var long = confirm("how many characters? must be between 8 and 128");
var characters =confirm("include special characters?");
var numbers = confirm("include numbers?");
var lowercase = confirm("include lowercase?");
var uppercase = confirm("include uppercase?");
var selected;

// values
characters = "!@#$%^&*()_+";
numbers = "123456789";
letter = "abcdefghijklmnopqrstuvwxyz";

// uppercase function
function changeToUpperCase(lowercase) {
  return lowercase.toUpperCase();
};
capitalLetter = lowercase.map(changeToUpperCase);

function generatePassword(){
  long = parseInt;
  if (!long){
    alert("invalid entry")
  } else if  (long <8 || long >128) {
    long=parseInt(prompt("invalid entry"));

  } else{
    
    characters =confirm("include special characters?");
    numbers = confirm("include numbers?");
    lowercase = confirm("include lowercase?");
    uppercase = confirm("include uppercase?");
  };
  if (!characters && !numbers && !lowercase && !uppercase){
    selected = alert("no criteria selected");
  }

  else if (characters && numbers && lowercase && uppercase){
    selected = characters.concat(numbers, letter, capitalLetter);
  }
  else if (characters && numbers && lowercase){
    selected = characters.concat(numbers, letter);
  }
  else if (characters && uppercase && lowercase){
    selected = characters.concat(capitalLetter, letter);
  }
  else if (characters && numbers && uppercase){
    selected = characters.concat(numbers, capitalLetter);
  }
  else if (uppercase && numbers && lowercase){
    selected = capitalLetter.concat(numbers, letter);
  }
  else if (uppercase && numbers){
    selected = capitalLetter.concat(numbers);
  }
  else if (numbers && lowercase){
  selected = numbers.concat(letter);
  }
  else if (uppercase && lowercase){
    selected = capitalLetter.concat(letter);
  }
  else if (uppercase && characters){
    selected = capitalLetter.concat(characters);
  }
  else if (lowercase && characters){
    selected = letter.concat(characters);
  }
  else if (characters && numbers){
    selected = characters.concat(numbers);
  }
  else if (uppercase){
    selected = capitalLetter;
  }
  else if (lowercase){
    selected = letter;
  }
  else if (numbers){
    selected = numbers;
  }
  else if (characters){
    selected = characters;
  };

if (num) {
    optionsVariable += numbers;
}
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
    function UserInput(ps) {
      document.getElementById("password").textContent = ps;
  
  }
