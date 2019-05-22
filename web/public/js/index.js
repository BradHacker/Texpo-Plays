$(document).ready(function() {
  $.ajax({
    type: 'GET',
    url: '/api/getPlayerCount/Player1',
    success: function(data) {
      let count = data['count'];
      $('#player1count').html(count);
      if (count == 10) {
        $('.player-1').attr('disabled', true);
        $('#player1count').css({ color: 'red' });
      }
    }
  });
  $.ajax({
    type: 'GET',
    url: '/api/getPlayerCount/Player2',
    success: function(data) {
      let count = data['count'];
      $('#player2count').html(count);
      if (count == 10) {
        $('.player-2').attr('disabled', true);
        $('#player2count').css({ color: 'red' });
      }
    }
  });
});
