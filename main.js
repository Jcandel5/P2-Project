let rate;

axios.get('https://api.exchangeratesapi.io/latest')
  .then(function (result) {
    console.log(result.data.rates['AUD'])
    rate = result.data.rates['AUD']
    document.querySelector('.container')
  })
  
var button = document.querySelector('button')
button.addEventListener('click', function(){
    document.querySelector('.theirMoney').value = parseInt(document.querySelector('.urMoney').value) * rate
})