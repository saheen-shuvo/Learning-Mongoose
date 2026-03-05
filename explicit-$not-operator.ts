{
    //Using explicit $not operator

    // db.test.find({
    //     id: {
    //         $not: {
    //             $gt: 5,
    //             $lte: 21
    //         }
    //     }
    // }).project({id: 1, name: 1, gender: 1}).sort({ id :-1 })

    // Output:
    // By using the explicit $not operator, we can find documents where the id field does not satisfy the conditions of being greater than 5 and less than or equal to 21. This will return all documents where the id field is either less than or equal to 5 or greater than 21, and only include the id, name, and gender fields in the result, sorted in descending order by the id field.
}