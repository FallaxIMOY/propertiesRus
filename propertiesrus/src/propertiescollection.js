var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/properties_db/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
    
  dbo.createCollection("properties", function(err, res) {
    if (err) throw err;
    console.log("properties Collection initialised!");
    db.close();
  });
  db.close();
});

url.exports = MongoClient;