{
    // $exists - Check for the existence of a field

    //db.test.find({gender: {$exists: true}})

    // Output:
    // The $exists operator is used to check for the existence of a field in a document. In this case, the query will return all documents where the gender field exists, regardless of its value. If the gender field is present in a document, it will be included in the results. If the gender field does not exist in a document, that document will not be included in the results.
}