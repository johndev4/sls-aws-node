## How to use the docker image to deploy the lambda functions from microservices locally.

1. Navigate to ".docker" directory.
```
cd .\.docker\
```

2. Run the docker image using docker compose with parameter `-d` to detach to running container.
```
docker compose up local -d
```

3. Run the following command to access the docker container. The container name set to `node-builder` as you can see in the docker-compose.yml.
```
docker exec -it <container_name> bash
```

4. Once inside the docker image, execute the commands to deploy lambdas.
