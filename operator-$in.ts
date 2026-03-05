{
    // Using $in operator - in operator

    //db.test.find({id: {$in: [2, 5, 7, 9]}}, {gender: 1, id: 1})

    // Output:
    // By using the $in operator, we can find documents where the id field is in the specified array of values. This will return all documents with an id value of 2, 5, 7, or 9, and only include the gender and id fields in the result.  
}