const API_KEY = "lyLn4WTM2Fzl6xjZKy08Te4fcTcRf2KB";
const SEARCH = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=`;
const API_URL_POPULAR = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=50`;
const SEARCH_CATS = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=20&q=cats`;
const SEARCH_MEMES = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=20&q=memes`;
const SEARCH_DOGS = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=20&q=dogs`;
//const donut = document.getElementById("donut");

showTrend(API_URL_POPULAR);

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
    document.getElementById("searchGiphButton").addEventListener("click", ev => {
        ev.preventDefault();
        if (input.value === '') {
            alert("введите запрос");
        } else {
            let str = document.getElementById("input").value.trim();
            let str1 = document.getElementById("range").value.trim();
            url = url.concat(str1).concat("&q=").concat(str);
            console.log(url);
            document.querySelector(".giphs").innerHTML = "";
            _Fetch(url);
        }
    });
}





