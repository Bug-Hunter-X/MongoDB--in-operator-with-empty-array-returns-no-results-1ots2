```javascript
// Correct use of $exists operator
db.collection.find({ field: { $exists: true } }); 
// Or to check if a field is missing
db.collection.find({ field: { $exists: false } });
```