import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Addbook() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    category: "",
    image: "",
    price: 0,
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("price", 0);
    formDataToSend.append("image", formData.image);

    try {
      const response = await fetch(
        "https://backend-nu-six-49.vercel.app/book",
        {
          method: "POST",
          body: formDataToSend,
        },
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Book uploaded successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="max-w-screen-2xl h-screen container mx-auto md:px-20 px-4">
      <div className="pt-24 text-center">
        <h1 className="text-2xl md:text-4xl">
          Donate a book <span className="text-pink-500"> Here! 📑</span>
        </h1>
      </div>

      {/* Form */}
      <div className="flex mt-8 justify-center">
        <form onSubmit={handleSubmit}>
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">Donate a book</h3>

          {/* Name */}
          <div className="mt-4 space-y-2">
            <h1>Name of Book</h1>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter book name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              required
            />
          </div>

          {/* Title */}
          <div className="mt-4 space-y-2">
            <h1>Title</h1>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              required
            />
          </div>

          {/* Category */}
          <div className="mt-4 space-y-2">
            <h1>Category</h1>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter category"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              required
            />
          </div>

          {/* Image URL */}
          <div className="mt-4 space-y-2">
            <h1>Image URL</h1>
            <input
              type="file"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files[0] })
              }
            />
          </div>

          {/* Button */}
          <div className="flex mt-4">
            <button className="bg-pink-500 w-full text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addbook;
