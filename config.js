module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!'
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || '2tEnrUherO',
    password: process.env.MYSQL_PASS || 'jkYH7U0Gym',
    database: process.env.MYSQL_DB || '2tEnrUherO', 
  },
  mysqlService: {
    port: process.env.MYSQL_SRV_PORT || 3001,
  }
}