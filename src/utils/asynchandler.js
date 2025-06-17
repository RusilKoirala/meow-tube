const asyncHandler = () => async(req, res , next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(err.code || code).json ({
            success: false,
            message: err.message,
        })
    }

}

export {asyncHandler}