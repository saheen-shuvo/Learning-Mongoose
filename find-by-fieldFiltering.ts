{
  //METHOD 1
  //Find by field filtering
  // db.test.find({ gender: "Male" }, { birthday: 1, email: 1 });

  //Output:

  /*
    { "_id" : ObjectId("5f8d0d55b54764421b7156c3"), "birthday" : "1990-01-01", "email" : "john@example.com" }   
    { "_id" : ObjectId("5f8d0d55b54764421b7156c4"), "birthday" : "1992-02-02", "email" : "jane@example.com" }  
    */

  //METHOD 2
  //Find by field filtering with projection
  // db.test.find({ gender: "Male" }).project({ birthday: 1, email: 1 });

  //Output:

  /*
    { "_id" : ObjectId("5f8d0d55b54764421b7156c3"), "birthday" : "1990-01-01", "email" : "john@example.com" }   
    { "_id" : ObjectId("5f8d0d55b54764421b7156c4"), "birthday" : "1992-02-02", "email" : "jane@example.com" }  
    */
}
