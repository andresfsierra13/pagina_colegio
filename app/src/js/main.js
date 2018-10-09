import styles from '../styles/main.scss';
import '!file-loader?name=[name].[ext]!../../public/favicon.ico';
import '../../public/media/img/black_school.jpg'
import '../../public/views/basic.html';
import './jquery.slides';
import './script';
var campos;

window.onload = function() {
  campos = document.querySelector('.wrapper');
  myPromises();
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

