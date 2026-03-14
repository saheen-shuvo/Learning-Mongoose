{
    // Update Operator: $addToSet and $push

    //db.test.updateOne(
    //  {
    //    _id: ObjectId("69a813e5b474b36529b57bfa"),
    //  },
    //  {
    //    $addToSet: {
    //      hobbies: "gaming",
    //    },
    //  },
    //);

    // Output:
    // The $addToSet operator is used to add a value to an array only if it does not already exist in the array. In this case, the query will find the document with the specified _id and add "gaming" to the hobbies array if it is not already present. If "gaming" is already in the hobbies array, no changes will be made. The $addToSet operator ensures that duplicate values are not added to the array.

    //db.test.updateOne(
    //  {
    //    _id: ObjectId("69a813e5b474b36529b57bfa"),
    //  },
    //  {
    //    $push: {
    //      hobbies: "gaming",
    //    },
    //  },
    //);

    // Output:
    // The $push operator is used to add a value to an array regardless of whether it already exists in the array or not. In this case, the query will find the document with the specified _id and add "gaming" to the hobbies array even if it is already present. If "gaming" is already in the hobbies array, it will be added again, resulting in duplicate values in the array. The $push operator does not check for duplicates and will add the value every time it is executed.
}