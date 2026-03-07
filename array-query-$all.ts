{
    // $all - Check if all elements in an array match a condition

    //db.test.find({hobbies: {$all: ["reading", "traveling"]}})

    // Output:
    // The $all operator is used to check if all elements in an array match a specified condition. In this case, the query will return all documents where the hobbies field is an array that contains both "reading" and "traveling". If the hobbies field contains both of these values, that document will be included in the results. If the hobbies field does not contain both "reading" and "traveling", that document will not be included in the results.
}