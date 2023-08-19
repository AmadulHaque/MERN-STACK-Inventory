
const AiUrl = async () =>{
    try {
        let data = await AiModel.findOne()
        return {status:"Success",data:data}
    }catch (e) {
        return {status:"fail",data:e.toString()}
    }
}
module.exports = UserCreateService;