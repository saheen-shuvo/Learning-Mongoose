{
    //Using implicit AND operator

    //db.test.find({gender: "Male", id: {$gt: 5, $lte: 19}}, {name: 1, gender: 1, id: 1})

    //Output:
    //By using the implicit AND operator, we can find documents where the gender field is "Male" and the id field is greater than 5 and less than or equal to 19. This will return all documents that satisfy both conditions, and only include the name, gender, and id fields in the result.    
}