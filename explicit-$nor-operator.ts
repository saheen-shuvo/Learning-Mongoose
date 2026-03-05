{
    //Using explicit $nor operator

    // db.test.find({
    //     $nor: [
    //         { id: { $gt: 5 } },
    //         { id: { $lte: 21 } }
    //     ]
    // }).project({id: 1, name: 1, gender: 1}).sort({ id :-1 })

    // Output:
    // By using the explicit $nor operator, we can find documents where the id field does not satisfy either of the two conditions. This will return all documents where the id field is neither greater than 5 nor less than or equal to 21, and only include the id, name, and gender fields in the result, sorted in descending order by the id field.
}