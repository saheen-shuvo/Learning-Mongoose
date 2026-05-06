{
    // db.test.aggregate([
        //stage-1
    //     {
    //         $facet: {
    //             "ageGroups": [
    //                 {
    //                     $bucket: {
    //                         groupBy: "$age",
    //                         boundaries: [20, 40, 60, 80],
    //                         default: "Other",
    //                         output: {
    //                             count: { $sum: 1 },
    //                             theirDetails: {$push: "$$ROOT"} //$$ROOT is a system variable that references the entire document being processed in the aggregation pipeline. In this case, it allows us to include all the details of the documents that fall into each bucket in the output.
    //                         }
    //                     }
    //                 }
    //             ],
    //             "genderGroups": [
    //                 {
    //                     $group: {
    //                         _id: "$gender",
    //                         count: { $sum: 1 },
    //                         theirDetails: {$push: "$$ROOT"}
    //                     }
    //                 }
    //             ]
    //         }
    //     }
    // ])
}