const ObjectId = require("mongodb").ObjectId;

const reviews = [
    {
        comment: "Review0...",
        rating: 3,
        user: { _id: ObjectId(), name: "John Doe"},
    },
    {
        comment: "Review1...",
        rating: 2,
        user: { _id: ObjectId(), name: "Joe"},
    },
    {
        comment: "Review2...",
        rating: 4,
        user: { _id: ObjectId(), name: "John"},
    },
]

module.exports = reviews;