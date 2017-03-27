# LeagueHQ

[![Code Climate](https://lima.codeclimate.com/github/djgorra/LeagueHQ/badges/gpa.svg)](https://lima.codeclimate.com/github/djgorra/LeagueHQ)

### Setting up locally
1. Clone down the repo, then set up the database.
`https://github.com/djgorra/LeagueHQ.git`
`rake db:setup`
2. Start the server
`rails s`

* Uses Ruby 2.2.5


 LeagueHQ is both a message board where League of Legends players can chat with each other about their favorite characters, and a hub for all of the data provided by the API about the game. This includes static data such as each character's abilities, their backstories and their in-game statistics, as well as dynamic data such as detailed information about a user's matches.

 Current to-do list:
 * ~~Admin features~~
 * ~~Google recaptcha on sign-up~~
 * Personal and character win rates
 * React animations
 * Begin moving away from relying on Rails views (React Router?)
