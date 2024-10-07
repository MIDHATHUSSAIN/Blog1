
const AuthorModel = require("../../models/Author.model")
const BlogModel = require("../../models/Blog.model")

const AuthorGetBlog = async(req,res)=>{
      
    const id = req.id

    try{
        
        const findAuthorTable = await AuthorModel.findOne({where:{userId:id}})

        const findBlog = await BlogModel.findAll({where:{authorId:findAuthorTable.id}})

        return res.json(findBlog)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

    
}

const AuthorCreateBlog = async(req,res)=>{
    
    const {title,description} = req.body

    const id = req.id

    try{
        
        const findAuthorTable = await AuthorModel.findOne({where:{userId:id}})
        console.log("test",req.file)
        // const savedFile = await new BlogModel({image:req.file.filename,title,description,authorId:findAuthorTable.id})
        const savedFile = await new BlogModel({image:req.file.filename,title,description,authorId:"c33eb17b-e9f3-45e9-ad2c-36de1c066d85"})
        await savedFile.save()
        return res.json(savedFile)
    }
    catch(error){
          res.status(500).json({err:error.message})
    }

}

const AuthorUpdateBlog = async(req,res)=>{
    
    const id = req.params

    try{

        const findBlog = await BlogModel.update({where:{id}})

       return res.json(findBlog)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

    

}

const AuthorDeleteBlog = async(req,res)=>{

    const id = req.params

    try{
        
        const findBlog = await BlogModel.destroy({where:{id}})

        return res.json(findBlog)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

    

}


module.exports = {AuthorGetBlog ,AuthorCreateBlog ,AuthorDeleteBlog ,AuthorUpdateBlog}