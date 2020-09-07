module.exports = {
  type: 'mongodb',
  url: 'YOUR MONGO URL',
  host: 'YOUR MONGO HOST',
  port: 27017,
  database: 'YOUR DATABASE',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  synchronize: true,
  logging: true,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
