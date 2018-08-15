

axios.get('https://api.exchangeratesapi.io/latest')
  .then(function (result) {
    console.log(result)
    document.querySelector('.container')
  })
  
var button = document.querySelector('button')
button.addEventListener('click', function(){
    document.querySelector('.theirMoney').value = 20
})