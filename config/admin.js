module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '58eb1525ce58cc128646a077cb5104ea'),
  },
});
