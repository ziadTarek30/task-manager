# Task Manager
A website where users can login and manage their tasks.

## Features and Architecture
This website was built using Express and MongoDB as well as ejs for server side rendering.

## Installations
cd task-manager

npm install

## Configure environment variables
PORT = 3000

MONGO_URI = your_mongodb_uri

## Run
npm start

## Demo
<video autoplay loop muted playsinline width="600">
  <source src="https://www.awesomescreenshot.com/video/46580773?key=8e579b56269402b84468f9c654b69173" type="video/mp4">
</video>

### Optional commands
`/generate input[<text>] background-color[<color>] foreground-color[<color>]`: Generates a QR code for the specified text/URL with the option to specify a background/foreground color. The color can be one of the following:

1. White
2. Black
3. Red
4. Green
5. Yellow
6. Blue

Example:

`/generate input[github.com]  background-color[Red] foreground-color[Green]`

## Contributing
If you would like to contribute to this project, feel free to open an issue or submit a pull request.

## Acknowledgments
- This bot was built using the discord.js library.
- QR code generation is powered by the qrcode npm package.
- The bot is hosted on [Railway](https://railway.app/)
