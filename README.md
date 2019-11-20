[![Netlify Status](https://api.netlify.com/api/v1/badges/475e1486-7ce9-4d3d-9ab0-c6a3dfdddae4/deploy-status)](https://app.netlify.com/sites/zedlove-speedtyping/deploys)

# Speed Typing

A small app to try using React Hooks. 
Deployed live here: [https://zedlove-speedtyping.netlify.com/](https://zedlove-speedtyping.netlify.com/)

Plucks a word from a fetched quote via [kanye.rest](https://kanye.rest/) to be typed by the user. Once the target word is typed, a new word is displayed. You have 30s to type as many words as you can.


## Running in development
use `yarn start`

## Current functionality
- displays a target word to be typed (minimum length of 4 characters)
- 30-second time limit
- auto-fetches new word when target word is reached
- score increments by one for each word


## Roadmap
- handle fetch errors
- persistent leaderboard (first locally)
- difficulty settings (increase min-length, type words in reverse)
- make it less ugly (isolate/emphasize target word and typing input more)
