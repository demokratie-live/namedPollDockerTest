### How to Start:

Start Docker environment
```
sudo systemctl start docker
```


Build Docker Image
```
cd /path/to/this/repo
sudo docker image build -t scrapercron .
```

Have local Mongo running
```
sudo systemctl start mongodb
```

Start Docker Image
```
sudo docker container run --network="host" scrapercron
```

Stop Docker image
```
sudo docker container kill $(docker ps -q)
```