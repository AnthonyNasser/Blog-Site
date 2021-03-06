import asyncHandler from 'express-async-handler'
import Blog from '../models/blogModel.js'

// @desc    Fetch all blogs
// @route   GET /api/blogs
// @access  public
const getBlogs = asyncHandler(async (req, res) => {
	const blogs = await Blog.find({})
	res.json(blogs)
})

// @desc    Fetch single blog
// @route   GET /api/blogs/:id
// @access  public
const getBlogById = asyncHandler(async (req, res) => {
	const blog = await Blog.findById(req.params.id)

	if (blog) {
		res.json(blog)
	} else {
		// override default of 500
		res.status(404)
		throw new Error('Blog not found')
	}
})

export { getBlogs, getBlogById }
