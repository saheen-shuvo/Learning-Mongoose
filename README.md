# Mastering MongoDB

A comprehensive reference and learning repository for MongoDB, covering essential CRUD operations, query operators, aggregation pipelines, and indexing strategies — all demonstrated with TypeScript code examples.

## 📚 Topics Covered

### CRUD Operations
| File | Description |
|------|-------------|
| `insertOne.ts` | Insert a single document into a collection |
| `insertMany.ts` | Insert multiple documents at once |
| `find.ts` | Query multiple documents |
| `findOne.ts` | Query a single document |
| `find-by-fieldFiltering.ts` | Retrieve only specific fields from documents |
| `delete-$deleteOne.ts` | Delete a single document |
| `delete-$unset-$pop.ts` | Remove fields (`$unset`) and array elements (`$pop`) from documents |

### Comparison Query Operators
| File | Description |
|------|-------------|
| `operator-$eq.ts` | Matches documents where a field equals a value (`$eq`) |
| `operator-$ne.ts` | Matches documents where a field is not equal to a value (`$ne`) |
| `operator-$gt.ts` | Matches documents where a field is greater than a value (`$gt`) |
| `operator-$gte.ts` | Matches documents where a field is greater than or equal to a value (`$gte`) |
| `operator-$gte.sort().ts` | `$gte` combined with sorting results |
| `operator-$lt.ts` | Matches documents where a field is less than a value (`$lt`) |
| `operator-$lte.ts` | Matches documents where a field is less than or equal to a value (`$lte`) |
| `operator-$in.ts` | Matches documents where a field value is in a specified array (`$in`) |

### Logical Query Operators
| File | Description |
|------|-------------|
| `implicit-and-operator.ts` | Implicit `AND` by passing multiple conditions in a query object |
| `explicit-$and-operator.ts` | Explicit `$and` operator for combining multiple conditions |
| `explicit-$or-operator.ts` | `$or` operator — matches documents satisfying at least one condition |
| `explicit-$not-operator.ts` | `$not` operator — negates a query expression |
| `explicit-$nor-operator.ts` | `$nor` operator — matches documents that fail all specified conditions |

### Array Query Operators
| File | Description |
|------|-------------|
| `array-query-$all.ts` | `$all` — matches arrays containing all specified elements |
| `array-query-$size.ts` | `$size` — matches arrays with a specific number of elements |

### Element Query Operators
| File | Description |
|------|-------------|
| `element-query-$exists.ts` | `$exists` — matches documents that contain (or lack) a specific field |
| `element-query-$type.ts` | `$type` — matches documents where a field is of a specified BSON type |

### Update Operators
| File | Description |
|------|-------------|
| `update-operator-$set.ts` | `$set` — update specific fields in a document |
| `update-$addToSet-$push.ts` | `$addToSet` (add unique) and `$push` (append) to array fields |
| `pull-$pull-$pullAll.ts` | `$pull` and `$pullAll` — remove elements from arrays |

### Aggregation Pipeline
| File | Description |
|------|-------------|
| `aggregate-$match-$project.ts` | Filter documents (`$match`) and reshape output (`$project`) |
| `aggregate-$lookup.ts` | Join documents from another collection (`$lookup`) |
| `aggregate-$unwind-$group.ts` | Deconstruct arrays (`$unwind`) and group results (`$group`) |
| `aggregate-$bucket.ts` | Categorize documents into ranges/buckets (`$bucket`) |
| `aggregate-$facet.ts` | Run multiple aggregation pipelines in a single stage (`$facet`) |

### Indexing
| File | Description |
|------|-------------|
| `COLSCAN-IXSCAN.ts` | Explains Collection Scans vs Index Scans and how to create indexes for optimized query performance |

## 🚀 Getting Started

### Prerequisites
- [MongoDB](https://www.mongodb.com/try/download/community) installed locally, or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster
- [Node.js](https://nodejs.org/) (for running TypeScript files)
- [TypeScript](https://www.typescriptlang.org/) installed globally

### Usage

Each file contains MongoDB shell queries and explanations as comments. You can:

1. Copy the queries directly into the **MongoDB Shell** (`mongosh`) or **MongoDB Compass**.
2. Use them as a reference while building your own MongoDB-powered applications.

## 🗺️ Concepts at a Glance

```
Mastering-MongoDB/
│
├── CRUD          → insertOne, insertMany, find, findOne, delete
├── Comparison    → $eq, $ne, $gt, $gte, $lt, $lte, $in
├── Logical       → $and (implicit/explicit), $or, $not, $nor
├── Array         → $all, $size
├── Element       → $exists, $type
├── Update        → $set, $push, $addToSet, $pull, $pullAll, $unset, $pop
├── Aggregation   → $match, $project, $lookup, $unwind, $group, $bucket, $facet
└── Indexing      → COLSCAN vs IXSCAN, createIndex
```

## 📖 Key Concepts

### Aggregation Pipeline
MongoDB's aggregation pipeline allows you to process data through multiple stages, transforming and analyzing documents as they pass through. Common stages include `$match`, `$group`, `$project`, `$lookup`, `$unwind`, `$bucket`, and `$facet`.

### Indexing
Indexes dramatically improve query performance by allowing MongoDB to locate documents without scanning the entire collection (COLSCAN). With a suitable index, MongoDB performs an index scan (IXSCAN), which is significantly faster for large collections.

```ts
// Create an index on the "age" field
db.test.createIndex({ age: 1 });

// This query will now use an IXSCAN instead of a COLSCAN
db.test.find({ age: 30 });
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests to add new examples, improve existing ones, or fix any errors.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
