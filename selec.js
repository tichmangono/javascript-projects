

function calcTotal(price, units){
  //let price = price; let units = units
  var tot = price*units;
  //return tot
  //console.log(tot)
  return(tot)
}

//t = calcTotal(price,units);
//console.log(t);

//# on event, select
document.querySelector('#btnCalc').addEventListener('click', function(){
  console.log("Button Clicked");
  //Calculator script!
  var price = document.querySelector('#price').value;
  var units = document.querySelector('#quantity').value;
  var tot = price*units;

  document.querySelector('#result').style.color = 'red'

  document.querySelector('#result').textContent = 'Of course '+ units +' units at cost of $' + price+ ' will cost a total of $'+tot;
}

)
