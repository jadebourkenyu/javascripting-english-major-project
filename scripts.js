let tipCalculator;
tipCalculator = function(total, tipRate){
  let tipAmount;
  if(tipRate < 1){
    tipAmount = tipRate * total;
  }else{
    tipAmount = tipRate * total * .01;
  }
  $("#response").html("Your tip is $" + tipAmount);
  };

tipCalculator(100.00,30);
