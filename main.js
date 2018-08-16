

axios.get('https://api.exchangeratesapi.io/latest')
  .then(function (result) {
    console.log(result.data.rates)
    document.querySelector('.container')
    for ( let rateKey in result.data.rates){
        var option = document.createElement('option')
        option.value = result.data.rates[rateKey]
        option.text = rateKey
        document.querySelector('select').appendChild(option)
    }
    var button = document.querySelector('button')
    button.addEventListener('click', function(){
        var e = document.querySelector("select");
        var selectedExchange = e.options[e.selectedIndex].value;
        document.querySelector('.theirMoney').value = parseFloat(document.querySelector('.urMoney').value) * parseFloat(selectedExchange)
        // console.log(result.data.rates[selectedExchange])
    })
  
})
  
// var button = document.querySelector('button')
// button.addEventListener('click', function(){
//     document.querySelector('.theirMoney').value = parseInt(document.querySelector('.urMoney').value) * rateKey
// })
// for(let i = 0; i < currencyType.length; i++){
// var dropDown = document.createElement('div');
// document.querySelector('#currencyTypes').appendChild(div);
// }
// input.Types.of.Currency = rate[result.data.rates]