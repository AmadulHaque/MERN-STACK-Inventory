const ExpenseReportService = require("../../Services/Report/ExpenseReportService");
const ReturnReportService = require("../../Services/Report/ReturnReportService");
const PurchaseReportService = require("../../Services/Report/PurchaseReportService");
const SalesReportService = require("../../Services/Report/SalesReportService");


exports.ExpensesByDate=async (req, res) => {
    let Result=await ExpenseReportService(req)
    res.status(200).json(Result)
}

exports.ReturnByDate=async (req, res) => {
    let Result=await ReturnReportService(req)
    res.status(200).json(Result)
}

exports.PurchaseByDate=async (req, res) => {
    let Result=await PurchaseReportService(req)
    res.status(200).json(Result)
}

exports.SalesByDate=async (req, res) => {
    let Result=await SalesReportService(req)
    res.status(200).json(Result)
}
