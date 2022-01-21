
<h1 align="center">Financial Control Api</h1>
<p align="center">🚀 Easy Tracking for Your Outcomes.</p>

    A Simple way for you to monitor your consuming habits.
    Just put in your receivings an payments and get your metrics.


## Steps to run this project locally:

1. Create a database with below command:
```sql
CREATE DATABASE `financial_control` DEFAULT CHARACTER SET utf8 ;
```
2. Create a new _.env_ file next to _package.json_ replacing angle brackets marked data with your own environment settings:
```
PORT = <Number of Application Port>
TYPEORM_CONNECTION = <mysql>
TYPEORM_HOST = <IP Address or Domain Name of Database Host>
TYPEORM_USERNAME = <Database User>
TYPEORM_PASSWORD = <Database Password>
TYPEORM_DATABASE = <Database Name - financial_control>
TYPEORM_PORT = <Database Port>
TYPEORM_SYNCHRONIZE = <true | false>
TYPEORM_LOGGING = <true | false>
TYPEORM_ENTITIES = src/entity/**/*.ts
```

3. Run `npm i` command
4. Run `npm run dev` command
