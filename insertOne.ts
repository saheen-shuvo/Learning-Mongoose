{
  // Insert One Document

  db.test.insertOne({ name: "Something" });

  //Output:

  /*
  {
    acknowledged: true,
    insertedId: ObjectId("5f8d0d55b54764421b7156c3")
  }
  */
}
