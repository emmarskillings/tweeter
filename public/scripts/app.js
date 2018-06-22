/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // Links to icons used for Compose and Tweet buttons

  const frown   = `<i class="far fa-frown"></i>`
  const cringe  = `<i class="far fa-meh"></i>`

  // Function that creates an object containing all the information from a tweet when it is posted

  function createTweetElement(tweet) {

    function escape(str) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }

    const icon      = tweet['user']['avatars']['small'];

    const name      = tweet['user']['name'];

    const handle    = tweet['user']['handle'];

    const text      = tweet['content']['text'];

    const timestamp = tweet['created_at'];

    const timeAgo   = Math.round(((((Date.now() - timestamp) / 1000) / 60) / 60) /24)

    const article   = `<article class='tweets'>
                        <header>
                          <div>
                            <img class="icon" src='${icon}' height=50px width=50px  style="border-radius: 5px">
                            <h3 class="name">${name}</h3>
                          </div>
                          <p class="handle">${handle}</p>
                        </header>
                        <p class="text">${escape(text)}</p>
                        <footer class='clearfix'>
                          <p class="timestamp">${timeAgo} days ago</p>
                          <div>
                            <i class="fas fa-flag"></i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-heart"></i>
                          </div>
                        </footer>
                    </article>`

    return article;
  };

  function renderTweets(tweets) {
    for (tweet of tweets) {
      $('#tweets-container').prepend(createTweetElement(tweet));
    }
  };

  function loadTweets() {
    $.ajax ({
      type: 'GET',
      url: '/tweets',
      success: renderTweets
    });
  }

  loadTweets();

  // Clears textarea an resets counter to zero when Tweet button is pressed

  function resetCounter(form) {
    $(form).find("textarea").val('');
    $(form).find(".counter").text(140);
  }

  // Hides or displays Compose Tweet box when Compose button is pressed

  $(".right").on('click', function() {
    $(".new-tweet").slideToggle();
    $("textarea").focus();
    $(".alert").text("");
  });

  // Posts tweet to page and sends data to MongoDB

  $("form").on( "submit", function(event) {

    event.preventDefault();

    $(".alert").text("")

    if ($('textarea').val().length === 0) {
      $(".alert").append(`Hey! You gotta type something before you can tweet it ${frown}`);
    } else if ($('textarea').val().length > 140) {
      $(".alert").append(`Uh oh... looks like you've got too much to say ${cringe}`);
    } else {
      $.ajax ({
        type: 'POST',
        url: '/tweets',
        data: $(this).serialize(),
        success: function(tweets) {
          $('#tweets-container').prepend(createTweetElement(tweets));
          resetCounter(event.target);
        }
      });
    }
  });

});



















