import Book from "../model/book.model.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};

export const createBook = async (req, res) => {
  try {
    const { name, title, category } = req.body;

    if (!name || !title || !category || !req.file) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const streamUpload = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "books" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          },
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

    const result = await streamUpload();

    const newBook = new Book({
      name,
      title,
      category,
      price: 0,
      image: result.secure_url,
    });

    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
