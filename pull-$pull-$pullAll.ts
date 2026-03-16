{
    // pull operations $pull, $pullAll

    //db.test.updateOne(
    //  {
    //    _id: ObjectId("69a813e5b474b36529b57bfa"),
    //  },
    //  {
    //    $pull: {
    //      hobbies: "gaming",
    //    },
    //  },
    //);

    // Output:
    // The $pull operator is used to remove all instances of a value from an array. In this case, the query will find the document with the specified _id and remove all occurrences of "gaming" from the hobbies array. If "gaming" is present multiple times in the hobbies array, all instances will be removed. If "gaming" is not present in the hobbies array, no changes will be made to the document.

    //db.test.updateOne(
    //  {
    //    _id: ObjectId("69a813e5b474b36529b57bfa"),
    //  },
    //  {
    //    $pullAll: {
    //      hobbies: ["gaming", "reading"],
    //    },
    //  },
    //);

    // Output:
    // The $pullAll operator is used to remove all instances of multiple values from an array. In this case, the query will find the document with the specified _id and remove all occurrences of "gaming" and "reading" from the hobbies array. If either "gaming" or "reading" is present multiple times in the hobbies array, all instances of those values will be removed. If neither "gaming" nor "reading" is present in the hobbies array, no changes will be made to the document. The $pullAll operator allows you to specify multiple values to be removed from the array in a single operation.
}