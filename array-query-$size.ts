{
    // $size - Check the size of an array field

    //db.test.find({hobbies: {$size: 3}})
    
    // Output:
    // The $size operator is used to check the size of an array field in a document. In this case, the query will return all documents where the hobbies field is an array with exactly 3 elements. If the hobbies field is an array with 3 elements, that document will be included in the results. If the hobbies field does not have exactly 3 elements, that document will not be included in the results.
}