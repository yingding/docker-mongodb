# docker-mongodb
configure a docker container of MongoDB using an official docker image of MongoDB, which also automatically activates authorization security settings and add a root user.

## Copy .env file
* `cd db && cp .env-template .env` to copy the template
* `vi .env` to set the root user and password, also the path variable `${MY_VOLUMES_PWD}` to existing mongodb files 
* This settings will create a user `root` in system db `admin with roles `{role: "root", db: "admin"}

## Copy init-mongo.js file
* `cd db && cp init-mongo-template.js init-mongo.js`
* `vi init-mongo.js` to edit the user name or password to add a user.

## Run install
`cd db && sh start_container.sh`

## Additional reference:
* docker-compose volume docs: https://docs.docker.com/compose/compose-file/#volumes
* create a docker-compose.yml file for mongodb https://stackoverflow.com/questions/34559557/how-to-enable-authentication-on-mongodb-through-docker/42973849#42973849
* Adding additional users during the container creation: https://medium.com/faun/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3
* Following https://stackoverflow.com/questions/20117104/mongodb-root-user/40925394#40925394 to edit init-mongo.js
