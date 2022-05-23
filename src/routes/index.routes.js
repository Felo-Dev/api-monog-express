import { Router } from "express";

import {
  renderTask,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} 
from "../controllers/task.controllers";

const router = Router();

router.get("/", renderTask);
router.post("/tasks/add", createTask);
router.get("/edit/:id", renderTaskEdit);
router.post("/edit/:id", editTask);
router.get("/delete/:id", deleteTask);
router.get("/toggleDone/:id", taskToggleDone);
/* router.get("/about", (req, res) => {
  res.render("about");
}); */

export default router;
