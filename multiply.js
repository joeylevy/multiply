//USE THIS OR SOMETHING LIKE IT TO GET INITIAL VALUES TO MULTIPLY
//$(function() {
//  $('body').on('change', '.number', function() {
//    x = parseFloat($('#x').val());
//    y = parseFloat($('#y').val());
//    z = parseFloat($('#z').val());
//    multiply([x, y, z]);
//  });

}); //end onloads


/*
takes an array of numbers and multiplies them
to avoid floating point errors, this removes all decimals points
then adds them back in at the end.
Decimals are messy in Javasscript, this should bypass that by only working
with whole numbers.
*/
function multiply(values) {
  $('#total').html('Calculating...');
  total = 1; //assign 1 to get the ball rolling on multiplication
  decimals = 0; //total decimals to remove

  $.each(values, function(index, value) {
    //console.log("Calculating for: " + value);
    if (!isNaN(value)) {
      var this_decimals = countDecimals(value);
      decimals += this_decimals; //add current decimals to total decimals to remove
      var current_number_no_dec = Number(value + 'e' + this_decimals);
      total *= current_number_no_dec;
    }
  });
  total = Number(total + 'e-' + decimals); //remove all extra decimals
  $('#total').html('Total: ' + total);
}

function countDecimals(value) {
  //console.log("Counting decimals of " + value);
  if (Math.floor(value.valueOf()) === value.valueOf()) return 0;
  var str_value = value.toString();
  //console.log("Value is: " + str_value);
  return str_value.split(".")[1].length || 0;
}
