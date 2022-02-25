module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e13b0c66b4ab0ff22eb7f3dd0618dc16'),
  },
});
