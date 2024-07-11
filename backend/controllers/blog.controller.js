const blogService = require('../services/blog.service');


const createBlog = async (req, res, ) => {
    try {
        const { title, content } = req.body;
        const author = req.user.userId;
        const newBlog = await blogService.createBlog({ title, content, author });
        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        next(error);
    }
};

const getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await blogService.getAllBlogs();
        res.status(200).json(blogs);
    } catch (error) {
        next(error);
    }
};


const getBlogById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const blog = await blogService.getBlogById(id);
        res.status(200).json(blog);
    } catch (error) {
        next(error);
    }
};

const updateBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const updatedBlog = await blogService.updateBlog(id, { title, content });
        res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
    } catch (error) {
        next(error);
    }
};


const deleteBlog = async (req, res, next) => {
    try {
      console.log("Delete blog endpoint reached");
      const blogId = req.params.id;
      await blogService.deleteBlog(blogId);
      res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
      next(error);
    }
};


module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
}