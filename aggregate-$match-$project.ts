// {
//     db.test.aggregate([
//stage-1
//     {
//         $match: { gender: "Male", id: {$gt: 30}}
//     },
//stage-2
//     {
//         $project: {name: 1, gender: 1, birthday: 1}
//     }
//     ])

// }