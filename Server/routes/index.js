module.exports = (app) => {
  app.use("/api/user", require("../modules/users/routes/index"));
  app.use("/api/register", require("../modules/register/routes/index"));
  app.use("/api/login",require("../modules/login/routes/index"));
};
