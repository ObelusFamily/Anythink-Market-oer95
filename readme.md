# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

### Download Docker

Download Docker from the official website and follow the instructions on your device. [Download Link](https://docs.docker.com/get-docker/)

### Initialize Docker

Move to the Location of your Project in the Terminal and start Docker with the command `docker-compose up`. This will initialize the virtual machines in Docker. Then check your [Backend](http://localhost:3000/api/ping) and [Frontend](http://localhost:3001/register) if everything is setup and works.
