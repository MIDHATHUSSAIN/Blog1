
const AuthorModel = require("../../models/Author.model")

const getAuthor = async(req,res)=>{
    
    try{

        const findAuthor = await AuthorModel.findAll()

        return res.json(findAuthor)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }
    
}

const createAuthor = async(req,res)=>{
    
    const {name,experience,bio} = req.body

    try{
        const findAuthor  = await AuthorModel.findOne({where:{name}})
        if(findAuthor){

            return res.status(409).json({message:"Author Already exsist"})
        }
        // is waqat to admin login hai to author k table me jo froeign kay hai us ko kese set kren gy
        const savedAuthor = await new AuthorModel({name,experience,bio})
        await savedAuthor.save()
        return res.status(201).json(savedAuthor)

    }catch(error){
        
          res.status(500).json({err:error.message})
    }

}

const  updateAuthor = async(req,res)=>{
    
    const {id} = req.params
    const {name,experience,bio} = req.body

    try{
       
        const findAuthor = await AuthorModel.update({name,experience,bio},{where:{id}})

        return res.json(findAuthor)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

   

}

const deleteAuthor = async(req,res)=>{

    const {id} = req.params

    try{

        
       const findAuthor = await AuthorModel.destroy({where:{id}})

       return res.json(findAuthor)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

}




module.exports = { getAuthor, createAuthor, updateAuthor, deleteAuthor } 