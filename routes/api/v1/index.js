"use strict";
const express = require("express");
const app = express();
const router = express.Router();
const {
  ensureAuthenticated,
  forwardAuthenticated,
} = require("../../../controller/authentication/index");

// const todos = require("../../../controller/todos/index");
// const {
//   getAllInterviews,
//   createTodo,
//   getTodo,
//   editTodo,
//   deleteTodo,
// } = require("../../../controller/todos/index");

router.get("/dashboard", ensureAuthenticated);
router.get("/admin-dashboard", ensureAuthenticated);
// router.post("/dashboard", createTodo);
// router.route("/edit/:id").get(getTodo).post(editTodo);
// router.route("/remove/:id").get(deleteTodo);

module.exports = router;
