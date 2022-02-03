# Handcrafters #

## Environment ##

### Frontend ###
TODO
### Backend ###
- Python 3
- FastAPI
- Uvicorn
- Postgres 13

## Setup ##

### Ubuntu ###
1. Follow the [official Docker page](https://docs.docker.com/engine/install/ubuntu/) guide instruction to install it. 

## Run the Docker environment ##
1. Position your terminal in the root of the project
2. Run the command `docker-compose up -d --build` to build and run the containers in detached mode

### Tricks and tips for Docker ###
- When the images are started, type `docker container ls -a` to check all running containers
- To remove the existing containers and volumes, do the following:
```shell
> docker-compose down # Stops containers and removes containers, networks, volumes, and images created by up
```
