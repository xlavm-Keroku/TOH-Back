# Angular-TourOfHeroes-Back
Tour of Hero ---- Angular + NodeJS + MongoDB + Express + Mongoose


## App Deploy in Heroku

https://toh-back-api.herokuapp.com/api/v1/hero/

>The deploy is automatic from a pipeline.

### Flow of Deploy

![Node Deploy](docs/nodedeploy.jpg)


-----------------------
## Configuration Initial

1. Execute command `mongod`
2. Execute command `mongo`
3. Execute in the command line of mongo: `use api_db`
4. Create the `.env` file in the equal route of package.json with this:
```
PORT = 3000
PATH_MONGO = mongodb+srv://xlavm:0987654321xlavm@heroes-cluster.b2voe.mongodb.net/heroes?retryWrites=true&w=majority
PATH_API_HERO = /api/v1/hero
```

-----------------------
## Executing the API 
1. Execute into the API
    ```
    npm install
    ```
2. Next, execute
    ```
    npm start
    ```
3. Open [http://localhost:3000](http://localhost:3000) in you browser.



-----------------

## API Reference

### Find-All
|Endpoint|Method|
|:--|:--|
|/hero/|GET|

Sample Response
```json
[
  {
    "id": 1,
    "name": "BLACK WIDOW"
  },
  {
    "id": 2,
    "name": "CAPTAIN AMERICA"
  }
]
```

---

### Create
|Endpoint|Method|
|:--|:--|
|/hero/add|POST|

Sample Response
```json
{
    "id": 1,
    "name": "BLACK WIDOW"
}
```
---

### Find
|Endpoint|Method|
|:--|:--|
|/hero/read/:id|GET|

Sample Response
```json
{
    "id": 1,
    "name": "BLACK WIDOW"
}
```

---

### Search
|Endpoint|Method|
|:--|:--|
|/hero/search/:name|GET|

Sample Response
```json
{
    "id": 1,
    "name": "BLACK WIDOW"
}
```

---

### Update
|Endpoint|Method|
|:--|:--|
|/hero/update/:id|PUT|

Sample Response
```json
{
    "id": 1,
    "name": "FALCON"
}
```

---

### Delete
|Endpoint|Method|
|:--|:--|
|/hero/delete/:id|DELETE|

Sample Response
```json
{
    "id": 1,
    "name": "BLACK WIDOW"
}
```