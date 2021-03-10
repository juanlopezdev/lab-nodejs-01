module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.POST_PORT || 3002,
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
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
  cacheService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3003
  },
  redis: {
    host: process.env.REDIS_HOST || 'redis-13492.c241.us-east-1-4.ec2.cloud.redislabs.com',
    port: process.env.REDIS_PORT || 13492,
    password: process.env.REDIS_PASS || 'HGM6t1tyj4rKFSfiqyVQyLBhoVjncbYh'
  }
}