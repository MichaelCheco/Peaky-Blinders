const express = require('express');
const expressGraphQL = require('express-graphql')
const schema = require('./schema')
const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true,
    schema
}))

app.listen(9000, () => console.log('listening on port 9000'))