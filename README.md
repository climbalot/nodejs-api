# NUSmoney API with Docker

pushed to https://hub.docker.com/r/florencelry/nusdevops

## Getting started

### Prerequisites 
- Make sure that you have Docker and Docker Compose installed
  - Windows or macOS:
    [Install Docker Desktop](https://www.docker.com/get-started)
  - Linux: [Install Docker](https://www.docker.com/get-started) and then
    [Docker Compose](https://github.com/docker/compose)

### Run the docker files
Clone a copy of this repository to your local machine

```console
$ git clone https://github.com/climbalot/nodejs-api.git
$ cd nodejs-api
```

Then run the `docker-compose.yml` file
```console
$ docker-compose up
```

If your run was successful, you should see:
```console
Building db
Step 1/2 : FROM mysql:latest
 ---> db2b37ec6181
Step 2/2 : COPY ./sql-scripts /docker-entrypoint-initdb.d/
 ---> Using cache
 ---> 3eff263385dc
Successfully built 3eff263385dc
Successfully tagged nusmoney-db:latest
...
app_1  | Application started succesfully
app_1  | Connection successful
```

Check for containers and their ports:
```console
$ docker ps
CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS                 PORTS                       NAMES
3987d6abe483        nusmoney-app                "sh /home/user/start…"   11 seconds ago      Up 9 seconds           0.0.0.0:8080->8080/tcp      nodejs-api_app_1
11b1a6dea7a8        nusmoney-db                 "docker-entrypoint.s…"   11 seconds ago      Up 10 seconds          3306/tcp, 33060/tcp         nodejs-api_db_1
```

## APIs available

### Retrieve information of all users

`GET /users`

Access through local browser: http://localhost:8080/users

Access through terminal:
```console
curl -i http://localhost:8080/users
```

Response:
```console
[
    {
        "user_id": 1,
        "name": "Rodney Finicj",
        "email": "rfinicj0@prweb.com",
        "mobile": "773-707-3293"
    },
    {
        "user_id": 2,
        "name": "Olga Cakes",
        "email": "ocakes1@issuu.com",
        "mobile": "503-136-8076"
    },
    {
        "user_id": 3,
        "name": "Josie Hoggetts",
        "email": "jhoggetts2@nps.gov",
        "mobile": "439-195-0337"
    },
    ...
```