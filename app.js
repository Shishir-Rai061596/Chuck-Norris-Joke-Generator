const BUTTON = document.querySelector('#get-jokes');
BUTTON.addEventListener('click', handleGetJokes);

const JOKES = document.querySelector('.jokes');


function handleGetJokes(e) {
    const NUMBER = document.querySelector('#number').value;
    const URL = `http://api.icndb.com/jokes/random/${NUMBER}`;
    const XHR = new XMLHttpRequest();

    XHR.open('GET', URL, true)

    XHR.onload = function () {
        if (XHR.status === 200) {
            const jokes = JSON.parse(XHR.responseText).value;
            let output = '';
            jokes.forEach(joke => output += `<li>${joke.joke}</li>`)
            JOKES.innerHTML = output;

        }
    }
    XHR.send()
    e.preventDefault();
}
