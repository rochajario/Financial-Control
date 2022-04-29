<h1 align="center">Financial Control Api</h1>
<h2 align="center">🚀 Easy Tracking for Your Outcomes.</h2>
<h3 align="center">CI/CD - Pipelines</h3>
<p align="center">
    <a href="https://github.com/rochajario/Financial-Control/actions/workflows/node.js.yml">
        <img src="https://github.com/rochajario/Financial-Control/actions/workflows/node.js.yml/badge.svg?branch=main"/>
    </a>
    <br/>
    <a href="https://sonarcloud.io/summary/new_code?id=rochajario_Financial-Control">
        <img src="https://sonarcloud.io/api/project_badges/measure?project=rochajario_Financial-Control&metric=sqale_rating"/>
    </a>
    <a href="https://sonarcloud.io/summary/new_code?id=rochajario_Financial-Control">
        <img src="https://sonarcloud.io/api/project_badges/measure?project=rochajario_Financial-Control&metric=security_rating"/>
    </a>
    <a href="https://sonarcloud.io/summary/new_code?id=rochajario_Financial-Control">
        <img src="https://sonarcloud.io/api/project_badges/measure?project=rochajario_Financial-Control&metric=reliability_rating"/>
    </a>
</p>
<h3 align="center">Alura Challenges Badges - Second Edition</h3>
<p align="center">
    <img align="center" src="./frontend/src/assets/alura_badge_02.png" title="Community Contributor Badge - Alura Challenge Backend - 2nd Edition" style="height: 105px; width:auto"/>
    <img align="center" src="./frontend/src/assets/alura_badge_01.png" title="Participation Badge - Alura Challenge Backend - 2nd Edition" style="height: 100px; width:auto"/>
    <img align="center" src="./frontend/src/assets/alura_badge_03.png" title="Community Sharing Badge - Alura Challenge Backend - 2nd Edition" style="height: 100px; width:auto"/>
</p>

    A Simple way for you to monitor your consuming habits.
    Just put in your receivings an payments and get your metrics.


## Steps to run this project locally:

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run Docker Image Manually
#### Build the container
```
sudo docker build --tag rochajario/financial-control:frontend-`version` -f Dockerfile
```
#### Make sure that bridged network is created
```
sudo docker network create -d bridge internal_network
sudo docker network ls
```
#### Run the Container
```
sudo docker run -d -p 8080:8080 --net=internal_network --name fin_ctrl_front rochajario/financial-control:frontend-0.1.0
```
