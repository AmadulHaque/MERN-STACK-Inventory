const DataModel = require("../../Models/Products/ProductsModel");
const CreateService = require("../../Services/common/CreateService");
const UpdateService = require("../../Services/common/UpdateService");
const ListTwoJoinService = require("../../Services/common/ListTwoJoinService");
const mongoose = require("mongoose");
const CheckAssociateService = require("../../Services/common/CheckAssociateService");
const SaleProductsModel = require("../../Models/Sales/SaleProductsModel");
const PurchaseProductsModel = require("../../Models/Purchases/PurchaseProductsModel");
const ReturnProductsModel = require("../../Models/Returns/ReturnProductsModel");
const DeleteService = require("../../Services/common/DeleteService");
const DetailsByIDService = require("../../Services/common/DetailsByIDService");
const DropDownService = require("../../Services/common/DropDownService");


exports.CreateProducts=async (req, res) => {
    let Result= await CreateService(req,DataModel);
    res.status(200).json(Result)
}

exports.UpdateProducts=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}

exports.ProductsList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let JoinStage1={$lookup: {from: "brands", localField: "BrandID", foreignField: "_id", as: "brands"}};
    let JoinStage2= {$lookup: {from: "categories", localField: "CategoryID", foreignField: "_id", as: "categories"}};
    let SearchArray=[{Name: SearchRgx},{Unit: SearchRgx},{Details: SearchRgx},{'brands.Name':SearchRgx},{'categories.Name':SearchRgx}]
    let Result=await ListTwoJoinService(req,DataModel,SearchArray,JoinStage1,JoinStage2);
    res.status(200).json(Result)
}


exports.ProductsDetailsByID=async (req, res) => {
    let Result= await DetailsByIDService(req,DataModel)
    res.status(200).json(Result)
}


exports.DeleteProduct=async (req, res) => {
    let DeleteID=req.params.id;
    const ObjectId =new mongoose.Types.ObjectId(DeleteID);
    
    let CheckReturnAssociate= await CheckAssociateService({ProductID:ObjectId},ReturnProductsModel);
    let CheckPurchaseAssociate= await CheckAssociateService({ProductID:ObjectId},PurchaseProductsModel);
    let CheckSaleAssociate= await CheckAssociateService({ProductID:ObjectId},SaleProductsModel);
    
    if(CheckReturnAssociate){
        res.status(200).json({status: "associate", data: "Associate with Return"})
    }
    else if(CheckPurchaseAssociate){
        res.status(200).json({status: "associate", data: "Associate with Purchase"})
    }
    else if(CheckSaleAssociate){
        res.status(200).json({status: "associate", data: "Associate with Sale"})
    }
    else{
        let Result=await DeleteService(req,DataModel);
        res.status(200).json(Result)
    }
}


exports.ProductsDropDown=async (req, res) => {
    let Result= await DropDownService(req,DataModel,{_id:1,Name:1})
    res.status(200).json(Result)
}