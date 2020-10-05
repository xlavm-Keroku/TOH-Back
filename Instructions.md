## Connect to Database From Bash
```
mongo "mongodb+srv://heroes-cluster.b2voe.mongodb.net/hero" --username xlavm
```

## Connect to Database From App of NodeJS
* cluester name: heroes-cluster
* database name: heroes
* collection name: hero
```
const mongoURI = 'mongodb+srv://xlavm:0987654321xlavm@heroes-cluster.b2voe.mongodb.net/heroes?retryWrites=true&w=majority';

mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true })
```


