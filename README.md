# Quantified Self Back-end Rails

## Initial Setup

1. Clone this repository and rename the repository to `quantified-self-rails` in one command

  ```shell
  git clone git@github.com:jrambold/quantified-self-express.git
  ```
2. cd into the `quantified-self-rails` directory

3. Install the dependencies

  ```shell
  npm install
  ```

3. Set up the database

  ```shell
  knex migrate:latest
  knex seed:run
  ```

4. Run test suite

  ```shell
    npm test
  ```

## Running the Server Locally

To see your code in action locally, you need to fire up a development server. Use the command:

```shell
npm start
```

Once the server is running, visit API endpoints in your browser:

* `http://localhost:3000/` to run your application. Enpoints are available in the * [Project Spec](https://github.com/turingschool/backend-curriculum-site/blob/gh-pages/module4/projects/quantified-self/quantified-self.md)

## Deployed
* Back end is deployed here: https://tranquil-peak-82064.herokuapp.com/

* To see the [front end](https://github.com/jrambold/quantified-self-fe-express) deployed with this app, visit https://jrambold.github.io/quantified-self-fe-express/
