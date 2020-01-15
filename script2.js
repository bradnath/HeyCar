/* Retrieve the Entry Point 
var request = new XMLHttpRequest();

request.open('GET', 'https://polls.apiblueprint.org/');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }

  var 
};

request.send();

/* View a question Detail 
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

/* Vote on a choice 
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

/* List all questions 
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

$.getJSON(
  "https://polls.apiblueprint.org/", function(data){
    console.log(data);
  }
);*/


/*
$.getJSON(
  "https://polls.apiblueprint.org/questions/1", function(data){
    //console.log(data);
    //console.log(data.question);
    //console.log(data.choices[3]);
    document.getElementById('questionA').innerHTML = data.question;
    document.getElementById('published-at').insertAdjacentHTML('beforeend', data.published_at);
    document.getElementById('length').insertAdjacentHTML('beforeend', data.choices.length);
    }
);
*/
//var question = data.question 

/*
var numberOfQuestions = 4;
var currentQuestion;
for (i = 0; i < numberOfQuestions; i++) {
  currentQuestion = document.getElementById('question1');
  console.log(currentQuestion);
}
*/

/*var text = document.getElementById('question1');

text.innerHTML = 'HELLO!!!';

console.log(text);*/


 
//console.log(questionContainer)

//pleasee.insertAdjacentHTML('beforeend', 'testing');

var $details = $('#details');
var $choices = $('#choices')

$.getJSON(
    "https://polls.apiblueprint.org/questions/1", function(data){
      //console.log(data);
      //console.log(data.question);
      //console.log(data.choices[3]);
      document.getElementById('questionA').innerHTML = data.question;
      document.getElementById('published-at').insertAdjacentHTML('beforeend', data.published_at);
      document.getElementById('length').insertAdjacentHTML('beforeend', data.choices.length);
      }
  );

$.ajax({
    type: 'GET',
    url: 'https://polls.apiblueprint.org/questions/1',
    success: function(data) {
        $.each(data, function(i, item) {
            $details.append('<li>my question</li>');
            console.log(item.votes)
        });
    }
})
/*
$.ajax({
    type: 'GET',
    url: 'https://polls.apiblueprint.org/questions/1',
    success: function(data) {
        console.log('sucess', data);
        $.each(data.choices, function(i, item) {
            $choices.append('<li>my question</li>');
        });
    }
})

