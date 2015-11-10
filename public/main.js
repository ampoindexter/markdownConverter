'use strict';

$(document).ready(init);

function init() {
  $('.btn').on('click', sendReq);
}

function appendOutput(data) {
  $('#output').append($.parseHTML(data));
}

function sendReq(e) {
  e.preventDefault();
  $.ajax({
    type:'POST',
    url: '/convert',
    data: {markdown: $('#markdown').val()}
  })
  .done(function(data){
    appendOutput(data);
  });
}