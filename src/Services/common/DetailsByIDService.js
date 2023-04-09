const mongoose = require("mongoose");
const DetailsByIDService= async (Request,DataModel) => {
    try{

        let DetailsID=Request.params.id;
        const userEmail = Request.headers['email'];

        let UserEmail=Request.headers['email'];

        const ObjectId = mongoose.Types.ObjectId;
        let QueryObject={};
        QueryObject['_id']=new mongoose.Types.ObjectId(DetailsID);
        QueryObject['UserEmail']=UserEmail;

        let data = await DataModel.aggregate([
            {$match:{_id:DetailsID}}
        ])

        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=DetailsByIDService