{
    // $type - Check the BSON type of a field

    //db.test.find({phone: {$type: "double"}})

    // Output:
    // The $type operator is used to check the BSON type of a field in a document. In this case, the query will return all documents where the phone field is of the BSON type "double". If the phone field is of type "double", that document will be included in the results. If the phone field is not of type "double", that document will not be included in the results.
}