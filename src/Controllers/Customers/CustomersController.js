const DataModel = require("../../Models/Customers/CustomersModel");
const CreateService = require("../../Services/common/CreateService");
const UpdateService = require("../../Services/common/UpdateService");
const ListService = require("../../Services/common/ListService");
const DropDownService = require("../../Services/common/DropDownService");
const mongoose = require("mongoose");
const CheckAssociateService = require("../../Services/common/CheckAssociateService");
const SalesModel = require("../../Models/Sales/SalesModel");
const DeleteService = require("../../Services/common/DeleteService");
const DetailsByIDService = require("../../Services/common/DetailsByIDService");

exports.CreateCustomers=async (req, res) => {
    let Result= await CreateService(req,DataModel)
    res.status(200).json(Result)
}

exports.UpdateCustomers=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}

exports.CustomersList=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}
    let SearchArray=[{CustomerName: SearchRgx},{Phone: SearchRgx},{Email: SearchRgx},{Address: SearchRgx}]
    let Result= await ListService(req,DataModel,SearchArray)
    res.status(200).json(Result)
}

exports.CustomersDropDown=async (req, res) => {
    let Result= await DropDownService(req,DataModel,{_id:1,CustomerName:1})
    res.status(200).json(Result)
}

exports.CustomersDetailsByID=async (req, res) => {
    let Result= await DetailsByIDService(req,DataModel)
    res.status(200).json(Result)
}

exports.DeleteCustomer=async (req, res) => {
    let DeleteID=req.params.id;
   const ObjectId =new mongoose.Types.ObjectId(DeleteID);
    let CheckAssociate= await CheckAssociateService({CustomerID:ObjectId},SalesModel);
    if(CheckAssociate){
        res.status(200).json({status: "associate", data: "Associate with Sales"})
    }
    else{
        let Result=await DeleteService(req,DataModel);
        res.status(200).json(Result)
    }
}