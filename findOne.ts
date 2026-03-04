{
    // Find one document in the collection
    db.test.findOne({phone: "01710000002"})

    // Output:

    /*
    {
        "_id" : ObjectId("5f8d0d55b54764421b7156c3"),
        "name" : "Something",
        "phone" : "01710000002"
    }
    */
}