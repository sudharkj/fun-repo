# Simple React Youtube App

A simple react application for searching and playing youtube videos using [youtube-api-search](https://www.npmjs.com/package/youtube-api-search).

## Background

The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Find the most recent version of how to perform common tasks at [create-react-app/README.md](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Run The App

1. Follow [cloning a repository](https://help.github.com/articles/cloning-a-repository/) if the project is not available locally.
1. Go to the root directory of the repository.
1. Install the dependencies and start the app.

  ```text
  $ npm install
  $ npm start
  ```

## Demo Docs

* App starts with latest top five suggestions by youtube and loads the top one video to the player. For example, below is the snapshot of a top five recommended videos in the suggestions and first suggested video loaded to the player.

![Initial State](/assets/img/initial_state.png)

* Selecting a video from the suggestions loads the video to the player and updates the suggestions based on the title of the selected video. For example, below is the snapshot of selecting _Ed Sheeran - Perfect (Official Music Video)_ from the above list. Note the following:
  * the suggestions gets updated based on the title of the selected video
  * search term never change on selecting a video

![Video Select](/assets/img/video_select.png)

* Searching for a video gets the top five suggestions for the search term and loads the first suggested video to the player. For example, below is the snapshot of searching _surfboards_.

![Search Results](/assets/img/search_results.png)