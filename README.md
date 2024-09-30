# How ti run this project. 

## Run redis locally in Docker

``` bash
docker run --name redis-stack -p 6379:6379 -d redis/redis-stack-server:latest
```
## Run redis commander

``` bash
npm install -g redis-commander

redis-commander
```

## Create .env file and add this config:

```bash
REDIS_URL=redis://localhost:6379/0
REDIS_PREFIX=nextapp
```

> Open localhost:8081 in your browser

## Run Nextjs app

```bash
npm run build
npm run start
```

> Open localhost:3000 in your browser

