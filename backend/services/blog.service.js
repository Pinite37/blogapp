const Blog = require("../models/blog.model");


const createBlog = async ({ title, content, author }) => {
    const blog = new Blog({ title, content, author })
    await blog.save();
    return blog;
};

const getAllBlogs = async () => {
    return await Blog.find();
};

const getBlogById = async (id) => {
    return await Blog.findById(id);
};

const updateBlog = async (id, { title, content }) => {
    return await Blog.findByIdAndUpdate(id, { title, content }, { new: true });
};

const deleteBlog = async (blogId) => {
    await Blog.findByIdAndDelete(blogId);
};


module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
}