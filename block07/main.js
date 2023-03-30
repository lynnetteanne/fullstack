/* Each variable will be the result of each calculation (three in total). The combination of the lock is 10 - 40 - 39. 
You must use three different arithmetic operators that will generate each individual number, then display the combination 
on the HTML page, or in an alert popup. */

/* Before anything else, write the pseudocode of your steps and how you will solve this exercise.


Add comments throughout the code to explain each step in the process.
*/

//create a string for the user saying: You have received this message because you have been choosen to open an important vault.

const x = "You have received this message because you have been chooosen to open an important vault. Here is the secret combination:";

alert (x);

/*Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-* /)
Each must equal one of the three codes in the combination.*/

const numOne = 8 + 2;
const numTwo = 5 * 8;
const numThree = numTwo - 1;

//Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.

alert (numOne + " , " + numTwo + " , " + numThree);

