Setup
=====

In one shell

```bash
git clone git@github.com:luislard/mercure_node_example.git

cd back && npm i && npm start

docker run \
    -e JWT_KEY='!UnsecureChangeMe!' --rm -e DEMO=1 -e DEBUG=1 -e ADDR=':80' -e ALLOW_ANONYMOUS=1 -e PUBLISH_ALLOWED_ORIGINS='*' \
    -p 80:80 \
    dunglas/mercure
```

To open the client go to:

http://localhost:3000

To simulate a push from server to client go to:

http://localhost:3000/hola

