{
  // Find many documents in the collection
  db.test.find({ name: "Something" });

  // Output:
  /*
    { "_id" : ObjectId("5f8d0d55b54764421b7156c3"), "name" : "Something", "phone" : "01710000002" }
    { "_id" : ObjectId("5f8d0d55b54764421b7156c4"), "name" : "Something", "phone" : "01710000003" }
    */
}
