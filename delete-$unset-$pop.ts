{
    // Delete $unset and $pop from the update document
    
    //db.test.updateOne(
    //  {
    //    _id: ObjectId("69a813e5b474b36529b57bfa"),
    //  },
    //  {
    //    $unset: {
    //      age: "",
    //    },
    //  },
    //);

    // Output:
    // The $unset operator is used to remove a field from a document. In this case, the query will find the document with the specified _id and remove the age field from that document. After executing this update, the age field will no longer exist in the document.

    //db.test.updateOne(
    //  {
    //    _id: ObjectId("69a813e5b474b36529b57bfa"),
    //  },
    //  {
    //    $pop: {
    //      hobbies: 1,
    //    },
    //  },
    //);

    // Output:
    // The $pop operator is used to remove an element from an array. In this case, the query will find the document with the specified _id and remove the last element from the hobbies array. If the hobbies array has multiple elements, only the last one will be removed. If the hobbies array is empty or does not exist, no changes will be made to the document. The $pop operator can also be used with a value of -1 to remove the first element from the array instead of the last one.
}