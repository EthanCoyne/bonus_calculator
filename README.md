#Bonus Calculator

##Authors:
*Hue Vang*
*Charles Kuruvila*
*Ethan Coyne*

###Details
In this challenge we created a JS calculator that returns an object with a name, bonus, annual compensation, and bonus rounded off to the closest dollar.

1) We created a function calculator which iterates through each employee object.
2) We used a switch statement to calculate the base bonus, based on employee rating.
3) We used the output from step 2 and added an additional 5% bonus, if the employee had a 4 digit employee number.
4) We reduced the bonus percentage by 1 if the annual salary was over 65000.
5) We set the bonus percentage equal to 13 if the output from step 4 was greater than 13.
6) We set the bonus percentage to 0 if the output from step 4 was below 0.
7) We created a new object through the constructor function method.
8) We console logged the new employee object.
