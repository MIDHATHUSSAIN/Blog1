const express = require('express')
const { getBlogs,getBlog ,createBlog, updateBlog, deleteBlog } = require('../../controller/AdminController/Admin.Blog.Controoler')
const router = express.Router()

router.get('/',getBlogs)
router.get('/:id',getBlog)
router.post('/',createBlog)
router.patch('/:id',updateBlog)
router.delete('/:id',deleteBlog)

module.exports = router