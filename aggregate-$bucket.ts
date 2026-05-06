// {
        de.test.aggregate([
            //stage-1
            {
                $bucket: {
                    groupBy: "$age",
                    boundaries: [20, 40, 60, 80],
                    default: "Other",
                    output: {
                        count: { $sum: 1 },
                        theirDetails: {$push: "$$ROOT"} //$$ROOT is a system variable that references the entire document being processed in the aggregation pipeline. In this case, it allows us to include all the details of the documents that fall into each bucket in the output.
                    }
                }
            }
        ])
// }