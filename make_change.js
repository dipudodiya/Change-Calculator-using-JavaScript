//on load function is added
window.addEventListener('load', function () {

    //Function created to clear textbox when appropriate
    function clearTextBox() {
        document.getElementById('cents').value = "";
    };

    //ProcessEntries function created to validate the value entered by the user
    function ProcessEntires() {

        var userEnteredValue = document.getElementById("cents").value;

        //if user entered value is not a number
        if (isNaN(userEnteredValue)) {
            alert("please enter the Number value");
            clearTextBox(); //to clear textbox
        } else if (userEnteredValue < 0 || userEnteredValue > 99) {  //if user entered value is not 0 - 99
            alert("please enter the right value");
            clearTextBox(); //to clear textbox
        }
        else {
            makeChanges(userEnteredValue); //function call
        }
    }

    //makeChanges function created to accept user's input and display output
    function makeChanges(userEnteredValue) {

        //Quarter conversion
        var changeToQuarters = 25; // 1 quarter = 25 cents
        var theValue = userEnteredValue;
        var numberOfChangeToQuarters = theValue / changeToQuarters;
        numberOfChangeToQuarters = parseInt(numberOfChangeToQuarters);
        document.getElementById("quarters").value = numberOfChangeToQuarters;

        //dime conversion
        var changeToDimes = 10; //1 dime = 10 cents
        var numberOfChangeToDimes = (theValue % changeToQuarters) / changeToDimes;
        numberOfChangeToDimes = parseInt(numberOfChangeToDimes);
        document.getElementById("dimes").value = numberOfChangeToDimes;

        //Nickel conversion
        var changeToNickels = 5; //1 nickel = 5 cents
        var numberOfChangeToNickles = (theValue % changeToQuarters) % changeToDimes / changeToNickels;
        numberOfChangeToNickles = parseInt(numberOfChangeToNickles);
        document.getElementById("nickels").value = numberOfChangeToNickles;

        var changeToPennies = 1;
        var numberOfChangeToPennies = theValue % changeToNickels / changeToPennies;
        numberOfChangeToPennies = parseInt(numberOfChangeToPennies);
        document.getElementById("pennies").value = numberOfChangeToPennies;
    };

    //Attaches the ProcessEntires to make change button when clicked
    document.getElementById('calculate').addEventListener('click', ProcessEntires);
    //Attaches the clearTextBox to clear text box when focused
    document.getElementById('cents').onfocus = clearTextBox;
})
