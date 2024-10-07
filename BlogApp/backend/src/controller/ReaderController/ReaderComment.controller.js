const ReaderCommentPost = async(req,res)=>{

    const {comment} = req.body

    try{
       
        const savedComment = await new CommentModel({comment})

        await savedComment.save()

        return res.status(201).json(savedComment)

    }catch(error){

          res.status(500).json({err:error.message})
    }

}

module.exports = ReaderCommentPost