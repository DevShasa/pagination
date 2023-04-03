const Post = require("../models/Post")

exports.getAllPosts = async (req, res) =>{
    try {
        let query = Post.find(); // returns a promise

        const pageNumber = parseInt(req.query.page);
        const pageSize = parseInt(req.query.limit)  || 12;
        const skip = (pageNumber -1) * pageSize; // how many pages to skip before returning data
        const total =  await Post.countDocuments(); // total number of documents

        const pages = Math.ceil(total / pageSize) // 500/50 = 10

        if(pageNumber > pages){
            return res.status(404).json({
                status:"fail",
                message:"No page found"
            })
            
        }

        query = query.skip(skip).limit(pageSize)
        const result = await query

        res.status(200).json({
            status:"success",
            count: result.length,
            pageNumber, // return page number
            pages,
            data: result
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:'error',
            message:'Server Error'
        })
    }
}

