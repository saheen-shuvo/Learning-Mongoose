{
  //Explicit $or operator

  // db.test.find({
  //     $or: [
  //         {gender: "Male"},
  //         { id: { $gt: 5} },
  //         { id: { $lte: 21 } }
  //     ]
  // }).project({id: 1, name: 1, gender: 1}).sort({ id :-1 })


  // Output:
  
  // By using the explicit $or operator, we can find documents where the gender field is "Male" or the id field is greater than 5 or less than or equal to 21. This will return all documents that satisfy any of the three conditions, and only include the id, name, and gender fields in the result, sorted in descending order by the id field.
}
