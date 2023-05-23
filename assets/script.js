// Add event listener as click button
document.getElementById("Generator").addEventListener("click", generatePassword);

// Function to generate a secure password
function generatePassword() {
  //variable to ask password length
  var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");

  // confirm password length meets requirements
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return; 
  }

  // confirm variables to be used
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // confirm at least one type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Select at least one character type.");
    return; 
  }

  // variable format to use
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // build out the character set based on user selections
  var characterSet = "";
  if (includeLowercase) characterSet += lowercaseChars;
  if (includeUppercase) characterSet += uppercaseChars;
  if (includeNumeric) characterSet += numericChars;
  if (includeSpecial) characterSet += specialChars;

  // generate password !
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  // display password
  alert("Based on your selections, your new password is:\n" + password);
}
