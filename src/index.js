import './Styles/navbar.scss';
import './Styles/aniTable.scss';


const aniTableBody = document.querySelector('#aniTable > tbody');

function loadData() {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://api.jikan.moe/v3/season/2021/summer');

  request.onload = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }

    try {
      const json = JSON.parse(request.responseText);
      console.log(json);
    } catch (error) {
      console.log('Request failed !!!!!!!');
    }
  };

  request.send();
}

function clearTable() {
  while (aniTableBody.firstChild) {
    aniTableBody.removeChild(aniTableBody.firstChild);
  }
}
