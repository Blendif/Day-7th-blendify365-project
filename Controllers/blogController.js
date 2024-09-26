const Blog = require('../models/Blog');

// @desc Get all blogs
// @route GET /api/blogs
// @access Public
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Create a new blog post
// @route POST /api/blogs
// @access Private
const createBlog = async (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const blog = new Blog({ title, content, author });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBlogs, createBlog };
