const DataModel = require("../../Models/Brands/BrandsModel");
// const ProductsModel = require("../../Models/Products/ProductsModel");
const CreateService = require("../../Services/common/CreateService");
const UpdateService = require("../../Services/common/UpdateService");
const ListService = require("../../Services/common/ListService");
const DropDownService = require("../../Services/common/DropDownService");
// const CheckAssociateService = require("../../Services/common/CheckAssociateService");
// const DeleteService = require("../../Services/common/DeleteService");
// const mongoose = require("mongoose");
// const DetailsByIDService = require("../../Services/common/DetailsByIDService");

exports.CreateBrand=async (req, res) => {
    let Result= await CreateService(req,DataModel)
    res.status(200).json(Result)
}


exports.UpdateBrand=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}



exports.BrandList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray=[{Name: SearchRgx}]
    let Result= await ListService(req,DataModel,SearchArray)
    res.status(200).json(Result)
}


// exports.BrandDetailsByID=async (req, res) => {
//     let Result = await DetailsByIDService(req,DataModel);
//     res.status(200).json(Result)
// }


exports.BrandDropDown= async (req, res) => {
    let Result= await DropDownService(req,DataModel,{_id:1,Name:1})
    res.status(200).json(Result)
}


