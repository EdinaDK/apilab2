const API_KEY = "lyLn4WTM2Fzl6xjZKy08Te4fcTcRf2KB";
const URL = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

let line = "найти гифку";
let speed = 100;
let i = 0;
let to;
function m_line() {
    if (i++<line.length) document.primer.forma.value = line.substring(0,i);
    else {
        document.primer.forma.value = " ";
        i = 0;
    }
    to = setTimeout(m_line, speed);
}

m_line();

const input = document.getElementById('input');
input.addEventListener('blur', m_line);
input.addEventListener('focus', () => {
    clearTimeout(to);
    input.value="";
});

function getData() {
    fetch(URL);
}
