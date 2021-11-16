const translate = document.querySelector('#btn-translate')
const text = document.querySelector('#textarea')
const baseURL = 'https://api.funtranslations.com/translate/minion.json'
var output = document.querySelector('#output')

function translationURL(input) {
  return baseURL + '?text=' + input
}

function errorHandler(err) {
  console.log('errror occured', err)
  output.innerText = "Something's wrong, Please check!"
}

function clickHandler() {
  var inputTxt = text.value
  fetch(translationURL(inputTxt))
    .then((response) => response.json())
    .then((data) => {
      const translatedText = data.contents.translated
      output.innerHTML = translatedText
    })
    .catch(errorHandler)
}

translate.addEventListener('click', clickHandler)
