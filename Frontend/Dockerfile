FROM node:14.19-alpine3.15
LABEL author="Jario Rocha"
ENV PORT=8080

WORKDIR /build
COPY . /build/

RUN npm install
RUN npm run build

EXPOSE ${PORT}
ENTRYPOINT [ "node", "server.js" ]


