{
  //Insert many documents into a collection

  db.test.insertMany([
    { name: "Something" },
    { name: "Another thing" },
    { name: "Yet another thing" },
  ]);

  //Output:

  /*
    {
      acknowledged: true,
      insertedIds: [
        ObjectId("5f8d0d55b54764421b7156c3"),
        ObjectId("5f8d0d55b54764421b7156c4"),
        ObjectId("5f8d0d55b54764421b7156c5")
      ]
    }
    */

  //TO see the all documents
  db.test.find();

  //
}
