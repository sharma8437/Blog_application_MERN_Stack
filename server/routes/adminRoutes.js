import express from 'express'
import { adminLogin, approvedCommentById, deleteCommentByID, getAllBlogAdmin, getAllComments, getDashboard } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';


const adminRouter = express.Router();

adminRouter.post("/login", adminLogin)
adminRouter.get("/comments", auth,  getAllComments)
adminRouter.get("/blogs", auth, getAllBlogAdmin)
adminRouter.post("/delete-comment", auth, deleteCommentByID)
adminRouter.post("/approved-comment", auth, approvedCommentById)
adminRouter.get("/dashboard", auth, getDashboard)


export default adminRouter;