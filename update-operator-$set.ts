{
  // $set operator to update specific fields in a document

  //   db.test.updateOne(
  //     {
  //       _id: ObjectId("69a813e5b474b36529b57bfa"),
  //     },
  //     {
  //       $set: {
  //         gender: "Tran",
  //       },
  //     },
  //   );

  // Output:
// The $set operator is used to update specific fields in a document. In this case, the query will find the document with the specified _id and update the gender field to "Tran". If the document with the specified _id exists, the gender field will be updated to "Tran". If the document does not exist, no changes will be made. The $set operator allows you to update only the specified fields without affecting other fields in the document. 
}
