module.exports = {
  type: 'mongodb',
  url:
    'mongodb+srv://prof-p:lBTZVwZUlsESjUEO@cluster0.ac84s.mongodb.net/prof-p?retryWrites=true&w=majority',
  host: 'cluster0.ac84s.mongodb.net',
  port: 27017,
  database: 'prof-p',
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
