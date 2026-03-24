import express from "express";
import { createBook, getBook } from "../controller/book.controller.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/", getBook);

// 👇 important
router.post("/", upload.single("image"), createBook);

export default router;

// import express from "express";
// import { getBook } from "../controller/book.controller.js";

// const router = express.Router();

// router.get("/", getBook);

// export default router;
