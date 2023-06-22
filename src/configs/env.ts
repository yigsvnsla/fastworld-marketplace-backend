export default () => ({
  app: {
    port: parseInt(process.env.PORT, 10) || 3500,
    jwt_secret: process.env.JWT_SECRET || 'love_secret',
  },
});
