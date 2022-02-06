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
3. To check the API interfaces, enter the following in your browser to open the Swagger docs -`localhost:8008/docs`

### Tricks and tips for Docker ###
- When the images are started, type `docker container ls -a` to check all running containers
- To remove the existing containers and volumes, do the following:
```shell
> docker-compose down # Stops containers and removes containers, networks, volumes, and images created by up
```
- To enter into a container and check the database content, use the following commands:
```
> docker-compose exec database psql --username=user --dbname=handcrafters_db
> handcrafters_db=# SELECT * FROM users;
 id |  name  | middle_name  | surname | birth_date |       email       |       password        | active 
----+--------+--------------+---------+------------+-------------------+-----------------------+--------
  1 | Matteo | Mr Worldwide | Lovric  | 01.01.1900 | mejtio@lovric.com | lalalanotreallyhashed | t
  2 | Three  | Male         | Tepsaje | 01.01.1800 | three@tepsye.com  | lalalanotreallyhashed | t
(2 rows)
```
