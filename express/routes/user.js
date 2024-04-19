const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("User Request Time: ", Date.now());
  next();
});

// define the base user page routes
// note that the base route "/" is actually
// "/user/", because of the way the main app
// uses this router within index.js
router
  .route("/")
  .get((req, res) => {
    res.send("Get User");
  })
  .post((req, res) => {
    res.send("Create User");
  })
  .delete((req, res) => {
    res.send("Delete User");
  });

router.get("/:userID", (req, res) => {
  res.send(`Navigated to the user page for: ${req.params.userID}.`);
});

router.get("/:userID/profile", (req, res) => {
  res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
});

router.get("/:userID/profile/:data", (req, res) => {
  res.send(
    `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
  );
});

// // define the user settings page
// // similarly, this route is "/user/settings".
// router.get("/settings", (req, res) => {
//   res.send("Get User Settings");
// });

//COMMON JS
module.exports = router;

//es6 modules
//export default router
