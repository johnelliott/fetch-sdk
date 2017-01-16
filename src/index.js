import fetch from 'whatwg-fetch'

console.log('about to fetch')
window.fetch('http swapi.co/api/planets/1/')
  .then(res => res.text())
  .then(text => console.log(text))
