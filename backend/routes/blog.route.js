const express = require('express');

const { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } = require('../controllers/blog.controller');

const authenticateUser = require('../middlewares/auth.middleware');
const roleAuthorization = require('../middlewares/role.middleware');

const router = express.Router();

router.post('/', authenticateUser, createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.put('/:id', authenticateUser, updateBlog);
router.delete('/:id', authenticateUser, roleAuthorization('admin'), deleteBlog);

module.exports = router;