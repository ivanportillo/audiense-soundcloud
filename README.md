## Audiense Frontend Exercise

Your mission is to build a small application using [SoundCloud API](https://developers.soundcloud.com/docs/api). Here is what you should be able to do with the app:

- Search for music using the [tracks endpoint](https://developers.soundcloud.com/docs/api/reference#tracks).
- Play songs immediately by clicking a button/song.
- Play/pause the current song from anywhere.
- Add songs to a queue so they are played consecutively when the current song finishes.
- View profile information using a `/user/:id` route. You can navigate to a profile from the current song.
- Navigate through three different pages (always keeping the current song playing):
  - Search page: allows you to search a text.
  - About page: some information about you (optional and you’re free to add what you like).
  - Queue: a list of the next songs added to the queue.

We’d love to see each of these features implemented but if you want to do more you can also:
- Maintain the current state so that after refreshing you keep the queue, current song, and playing status.
- Create your own audio tracker with progress visualization.
- Move backwards/forwards by clicking in the progress bar.
- Modify the queue by playing a song that is scheduled.
- Add a next song button next to the play button.

### Technology and boilerplate

You are free to use whatever stack you want but what we value the most is [React](https://github.com/facebook/react). We have put together a boilerplate that includes packages and folders ready to create a flow similar to our app including:

- React + Redux.
- Redux Saga.
- React Router.
- CSS Modules.
- PostCSS.
- Ramda.
- Webpack.

Use only what you are comfortable with.

### Example

You can see a video example of what we’d love to see done in `soundcloud_player.mp4`. You’re free to use whatever styles you like but you can n try to get as close as possible to the given example.

### Hints

- Run the boilerplate with `npm start`.
- You **don't need to use everything we provide** as long as your app works nicely and it's well organized.
- The boilerplate is configured with a code style for both Javascript and CSS. You should respect this.
- You can use Babel at Stage 0 and `async/await`.
- The client id to access Soundcloud API is available at `process.env.CLIENT_ID`.
- There is no need to configure a build, the development env. is sufficient.
- We really value **tests**. Try to find a balance. Not implementing everything but having good test coverage is better than covering everything with no tests.
