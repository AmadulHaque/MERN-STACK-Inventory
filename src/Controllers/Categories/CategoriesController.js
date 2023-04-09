const DataModel = require("../../Models/Categories/CategoriesModel");
const ProductsModel = require("../../Models/Products/ProductsModel");
const CreateService = require("../../Services/common/CreateService");
const UpdateService = require("../../Services/common/UpdateService");
const ListService = require("../../Services/common/ListService");
const DropDownService = require("../../Services/common/DropDownService");
// const CheckAssociateService = require("../../Services/common/CheckAssociateService");
const DeleteService = require("../../Services/common/DeleteService");
const mongoose = require("mongoose");
const DetailsByIDService = require("../../Services/common/DetailsByIDService");

exports.CreateCategories=async (req, res) => {
    let Result= await CreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.UpdateCategories=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}


exports.CategoriesList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray=[{Name: SearchRgx}]
    let Result= await ListService(req,DataModel,SearchArray)
    res.status(200).json(Result)
}


exports.CategoriesDropDown=async (req, res) => {
    let Result= await DropDownService(req,DataModel,{_id:1,Name:1})
    res.status(200).json(Result)
}


exports.CategoriesDetailsByID=async (req, res) => {
    let Result= await DetailsByIDService(req,DataModel)
    if (Result.status=='fail') {
        res.status(400).json(Result)
    } else {
        res.status(200).json(Result)

    }
}


exports.DeleteCategories=async (req, res) => {
    // let DeleteID=req.params.id;
    // const ObjectId = mongoose.Types.ObjectId;
    // let CheckAssociate= await CheckAssociateService({CategoryID:ObjectId(DeleteID)},ProductsModel);
    // if(CheckAssociate){
    //     res.status(200).json({status: "associate", data: "Associate with Product"})
    // }
    // else{
        let Result=await DeleteService(req,DataModel);
        res.status(200).json(Result)
    // }
}
