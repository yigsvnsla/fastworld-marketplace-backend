export default () => ({
  app: {
    port: parseInt(process.env.PORT, 10) || 3500,
  },
  database: {
    type: process.env.DB_TYPE || 'postgres',
    username: process.env.POSTGRES_USER || 'yigs',
    host: process.env.POSTGRES_HOST || 'localhost',
    db: process.env.POSTGRES_DB || 'market_place_db',
    password: process.env.POSTGRES_PASSWORD || '123abc',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5435,
  },
});
