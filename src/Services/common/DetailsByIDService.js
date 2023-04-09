const mongoose = require("mongoose");
const DetailsByIDService= async (Request,DataModel) => {
    try{

        let DetailsID=Request.params.id;
        const userEmail = Request.headers['email'];


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