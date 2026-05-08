// Indexing
// Indexes are special data structures that store a portion of the collection's data in an easy-to-traverse form. They allow MongoDB to quickly locate and access the data without having to scan the entire collection. Indexes can be created on one or more fields of a collection, and they can be either single-field or compound indexes.
// When a query is executed, MongoDB uses the indexes to determine the most efficient way to retrieve the requested data. If an index exists on the fields being queried, MongoDB can quickly navigate through the index to find the relevant documents, resulting in faster query performance. However, if no suitable index exists, MongoDB must perform a collection scan (COLSCAN), which involves scanning every document in the collection to find matches, leading to slower performance.

// In summary, indexing is a crucial aspect of MongoDB that significantly enhances query performance by allowing for efficient data retrieval. Properly designed indexes can make a significant difference in the speed of queries and overall application performance.

// COLSCAN (Collection Scan) and IXSCAN (Index Scan) are two different methods that MongoDB uses to execute queries. The choice between these methods depends on the presence of indexes and the nature of the query being executed.

// COLSCAN (Collection Scan):
// A collection scan occurs when MongoDB needs to scan every document in a collection to find the documents that match the query criteria. This happens when there are no suitable indexes available for the query. In a collection scan, MongoDB reads each document sequentially, which can be time-consuming, especially for large collections. The performance of a collection scan degrades as the size of the collection increases.

// IXSCAN (Index Scan):
// An index scan occurs when MongoDB can use an index to efficiently locate the documents that match the query criteria. When an index is present on the fields being queried, MongoDB can quickly navigate through the index to find the relevant documents without having to scan the entire collection. This results in significantly faster query performance compared to a collection scan. Index scans are particularly beneficial for queries that filter on indexed fields or sort results based on indexed fields.

// In summary, while a COLSCAN involves scanning every document in a collection and can lead to slower performance, an IXSCAN utilizes indexes to quickly locate relevant documents, resulting in much faster query execution. Properly designing and using indexes is essential for optimizing query performance in MongoDB.

//IXSCAN
db.test.createIndex({ age: 1 }) // Create an index on the "age" field in ascending order
db.test.find({ age: 30 }) // This query will use the index on the "age" field, resulting in an IXSCAN

//COLSCAN
db.test.find({ name: "John" }) // If there is no index on the "name" field, this query will result in a COLSCAN, as MongoDB will need to scan the entire collection to find documents with the name "John" 