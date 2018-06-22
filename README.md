# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

The layout includes a Compose button that allows the user to toggle between showing and hiding the Compose Tweet section of the page. If a tweet is invalid, namely if there is no content in the text area or there are more than 140 characters, an appropriate error message will be displayed. When a valid tweet is posted it appears directly below the Compose Tweet section! Happy Tweetering!

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above

## Screenshots

!["Screenshot of tweeter with footer icons highlighed"](https://github.com/emmarskillings/tweeter/blob/master/docs/tweeter.png)
!["Screenshot of tweeter with Tweet button highlighed and error message showing"](https://github.com/emmarskillings/tweeter/blob/master/docs/new_tweet.png)
!["Screenshot of tweeter with Compose button highlighed and Compose Tweet section hidden"](https://github.com/emmarskillings/tweeter/blob/master/docs/compose.png)