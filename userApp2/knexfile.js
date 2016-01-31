//// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      filename: 'userApp2'
    },
    debug: true,
    pool: {
      min: 1,
      max: 1
    }
  },
}