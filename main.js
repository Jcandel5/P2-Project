

axios.get('https://api.exchangeratesapi.io/latest')
  .then(function (result) {
    console.log(result.data.rates)
    document.querySelector('.container2')
        for ( let rateKey in result.data.rates){
            var option = document.createElement('option')
            option.value = result.data.rates[rateKey]
            option.text = rateKey
            document.querySelector('select').appendChild(option)
    }
    document.querySelector('.container2')
        for ( let rateKey in result.data.rates){
            var option = document.createElement('option')
            option.value = result.data.rates[rateKey]
            option.text = rateKey
            document.querySelector('#selector2').appendChild(option)
    }
    var button = document.querySelector('button')
        button.addEventListener('click', function(event){
            var local = document.querySelector('.urMoney')
            localStorage.setItem('Your Moneyzzz', local.value)
            var e = document.querySelector("#selector2");
            var selectedExchange = e.options[e.selectedIndex].value;
            document.querySelector('.theirMoney').value = parseFloat(document.querySelector('.urMoney').value) * parseFloat(selectedExchange)
    })
  
})