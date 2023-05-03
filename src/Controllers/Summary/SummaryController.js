const ExpenseSummaryService = require("../../Services/summary/ExpenseSummaryService");
const ReturnSummaryService = require("../../Services/summary/ReturnSummaryService");
const PurchaseSummaryService = require("../../Services/summary/PurchaseSummaryService");
const SalesSummaryService = require("../../Services/summary/SalesSummaryService");

exports.ExpensesSummary=async (req, res) => {
    let Result=await ExpenseSummaryService(req)
    res.status(200).json(Result)
}

exports.ReturnSummary=async (req, res) => {
    let Result=await ReturnSummaryService(req)
    res.status(200).json(Result)
}

exports.PurchaseSummary=async (req, res) => {
    let Result=await PurchaseSummaryService(req)
    res.status(200).json(Result)
}

exports.SalesSummary=async (req, res) => {
    let Result=await SalesSummaryService(req)
    res.status(200).json(Result)
}