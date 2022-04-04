## Deploying the containers
The app has been containerized with Docker for easy local deployment and testing by all teams. The following is a step-by-step guide to starting up and
interacting with the containers, namely:
- **app** (React frontend)
- **api** (Django/DRF Backend)
- **db** (PostgreSQL database)
- **redis** (Redis server)
- **nginx** (NGINX reverse proxy)
### Requirements
- [Docker Desktop](https://docs.docker.com/desktop/)
- [docker-compose](https://docs.docker.com/compose/install/)
- Working Internet connection

### Setup
1. Install [Docker Desktop](https://docs.docker.com/desktop/) and [docker-compose](https://docs.docker.com/compose/install/)
2. Clone the repository

    ```
    git clone https://github.com/ThePlaygroundDevs/playground.git
    ```
3. In the repo folder, navigate to `./playground`

    ```
    cd ./playground/playground
    ```
4. Create a new folder `.env`

    ```
    mkdir .env
    ```
5. Inside the `.env` folder create the following files

    ```
    app.test.env
    api.test.env
    db.test.env
6. Inside the `api.test.env` file, add the following environment variable

    ```
    SECRET_KEY=<ENTER_A_SECRET_KEY>
    ```
    You can generate a secret key using [Django Secret Key Generator](https://djecrety.ir)
    
7. Inside the `db.test.env` file, add the following environment variables

    ```
    POSTGRES_USER=<ENTER_A_USER_NAME>
    POSTGRES_PASSWORD=<ENTER_A_PASSWORD>
    POSTGRES_DB=<ENTER_A_DATABASE_NAME>
    ```

### Local Deployment
1. In the repo folder, navigate to the `playground` folder
2. Start Docker Desktop
3. After Docker starts, spin up the containers, run the following command

   ```
   docker-compose -f docker-compose.test.yml up
   ```
   *The initial build requires an internet connection to download all the required files*
4. After all the containers start - check the Docker Desktop interface to see all running containers, access the **app** at `http://localhost`
5. Browse the **api** at `http://localhost/api/`
6. To stop all containers, run the following command
   ```
   docker-compose -f docker-compose.test.yml down
   ```


### Container Shells
To get a shell instance on any container, run the following command
```
docker-compose -f docker-compose.test.yml run <CONTAINER_NAME> sh
```
*The `./api` and `./app` folders are mounted in the containers. Any changes to the folders in the containers will be also be made in the repo folder and vice versa*

### Rebuilding The API Container
When new packages are added to the **requirements.txt** file the **api** container has to be rebuilt. To rebuild the container, run the following command
```
docker-compose -f docker-compose.test.yml build api
```
*This requires an internet connection.*
