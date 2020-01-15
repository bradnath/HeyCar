
/* Retrieve the Entry Point */
var request = new XMLHttpRequest();

request.open('GET', 'https://polls.apiblueprint.org/');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

/* View a question Detail */
var request = new XMLHttpRequest();

request.open('GET', 'https://polls.apiblueprint.org/questions/1');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

/* Vote on a choice */
var request = new XMLHttpRequest();

request.open('POST', 'https://polls.apiblueprint.org/questions/1/choices/1');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();

/* List all questions */
var request = new XMLHttpRequest();

request.open('GET', 'https://polls.apiblueprint.org/questions?');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();