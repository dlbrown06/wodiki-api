// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const fsequelize = require('fastify-sequelize')
const routes = require("./routes");

const sequelizeConfig = {
  instance: 'db', // the name of fastify plugin instance.
  autoConnect: true, // auto authentication and test connection on first run
  
  // other sequelize config goes here
  dialect: 'postgres',
}

fastify
  .register(fsequelize, "postgres://dougbrown:zyZxa8-fykxub-fepbaq@wodiki-prod.ccff2upu3m13.us-west-1.rds.amazonaws.com:5432/wodiki")
  .ready()

//Configure CORS
fastify.register(require('fastify-cors'), { 
  origin: true
})

// Declare routes
routes(fastify);

// Run the server!
const start = async () => {
  try {
    const port = process.env.PORT || 8081;
    await fastify.listen(port)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()