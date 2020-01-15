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
