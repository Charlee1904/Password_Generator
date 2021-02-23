var pwl;
var pwlc;
var pwuc;
var pwnc;
var pwsc; 
var pwlcg =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var pwucg =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var pwscg;["!","@","$","%","^","&", "*","(",")","~"];
var pwncg;

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//when generate button is clicked the password criteria questions begin with password length.
generateBtn.addEventListener("click",function() {
 var pwl = prompt("Please select password length. Must be between 8-128 characters.");
 console.log(pwl);
if(pwl <8 || pwl>128) {
//if pw isn't long enough ask question again 
 pwl = prompt("Password must be between 8-128 characters.");
}
else {
//password questions
 pwlc = prompt("Do you want to include lowercase characters?(Y/N)");
 pwuc = prompt("Do you want to include uppercase characters?(Y/N)");
 pwnc = prompt("Do you want to include numeric characters?(Y/N)");
 pwsc = prompt("Do you want to include special characters?(Y/N)");

}
});
// turning the responses into booleans 
if(pwlc !==("y","Y","Yes","yes")){
  pwlcg == false;
}
else {
  pwlcg !== true;
};

if(pwuc !== ("y","Y","Yes","yes")){
  pwucg == false;
}
else {
  pwucg == true;
};

if(pwnc !== ("y","Y","Yes","yes")) {
  pwncg == false;
}
else {
  pwncg == true;
}

if(pwsc == ("y","Y","Yes","yes")){
  pwscg == true;
}
else {
  pwscg ==false;
};
//turn boolean into criteria selector to generate pw.
//generate pw and send to the html
function generatePassword() { 
  for ( i = 0; i < pwl; i++);
  const random = Math.floor(Math.random() * pwlcg.length);
  console.log(random,pwlcg,[random]);
return(random)};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
