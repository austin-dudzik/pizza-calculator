$(document).ready(

  function() {

    // Find the bill split button with jQuery

    // Assign function calculatePizza to run when the button is clicked

    $("#calculate").click(calculatePizza);

  }


);

function calculatePizza() {

  // Get the number of toppings
  //let toppings = prompt("How many toppings would you like on your pizza?");

  toppings = parseFloat($("input#toppings").val());

  // Get the number of people to split bill
  //let people = prompt("How many people will be splitting the bill?");

  people = parseFloat($("input#people").val());

  // Create the basic pizza price ($15)
  let basicPrice = 15;

  // Calculate price for all toppings
  let top = toppings * 1.25;

  // Add toppings price to pizza cost
  let pizzaWithToppings = basicPrice + top;

  // Divide pizza value to get split price
  let splitPrice = pizzaWithToppings / people;

  // Display the pizza cost for each person
  //alert(`The price that each person will need to pay is $${splitPrice.toFixed(2)}.`);

  $("#message").text(`The price that each person will need to pay is $${splitPrice.toFixed(2)}.`);

}