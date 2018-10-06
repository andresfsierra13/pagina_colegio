import styles from '../styles/main.scss';
import '!file-loader?name=[name].[ext]!../../public/favicon.ico';
import '../../public/views/basic.html';
var campos;

window.onload = function() {
  campos = document.querySelector('.wrapper');
  start(campos);
  load();
  myPromises();
}

function load() {
  const myImg = document.querySelector('.js-button');
  fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg')
  .then((response) => response.blob())
  .then((response) => {
    const objectURL = URL.createObjectURL(response);
    myImg.src = objectURL;
  })
  .catch((err) => console.log('no pudo: ' + err));
}

function myPromises() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("pasaron 8 segundos =)");
    }, 8000);
  });

  promise.then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(err.message);
  });
}

function start(campo) {
  var span = document.createElement('span');
  span.textContent = "Super Genial"
  campo.appendChild(span);
}
