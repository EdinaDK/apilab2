const API_KEY = "lyLn4WTM2Fzl6xjZKy08Te4fcTcRf2KB";
const SEARCH = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=50&q=`;
const API_URL_POPULAR = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=50`;

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
showTrend(API_URL_POPULAR);

const input = document.getElementById('input');
input.addEventListener('blur', m_line);
input.addEventListener('focus', () => {
    clearTimeout(to);
    input.value="";
});

function showTrend(url)
{
    console.log(url);
    _Fetch(url);
}

function _Fetch(url) {
    fetch(url)
        .then(response => response.json())
        .then(content => {
            for (let i = 0; i < 50; i++) {
                console.log(content.data);
                console.log("META", content.meta);
                let fig = document.createElement("figure");
                let img = document.createElement("img");
                let fc = document.createElement("figcaption");
                img.src = content.data[i].images.fixed_height.url;
                img.alt = content.data[i].title;
                fc.textContent = content.data[i].title;
                fig.appendChild(img);
                fig.appendChild(fc);
                let out = document.querySelector(".giphs");
                out.insertAdjacentElement("afterbegin", fig);
                document.querySelector("#input").value = "";
            }
        })
        .catch(err => {
            console.error(err);
        });
}

document.addEventListener("DOMContentLoaded", init);
function init(url) {
    input.value === '';
    document.getElementById("searchGiphButton").addEventListener("click", ev => {
        ev.preventDefault();
        if (input.value === '') {
            alert("введите запрос");
        } else {
            let str = document.getElementById("input").value.trim();
            url = url.concat(str);
            console.log(url);
            document.querySelector(".giphs").innerHTML = "";
            _Fetch(url);
        }
    });
}





