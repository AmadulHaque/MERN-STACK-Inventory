const express =require("express");
const router = express.Router();
const UsersController=require("../Controllers/Users/UserController");
const BrandsController=require("../Controllers/Brand/BrandController");
const CategoriesController=require("../Controllers/Categories/CategoriesController");
const CustomersController=require("../Controllers/Customers/CustomersController");
const SuppliersController=require("../Controllers/Suppliers/SuppliersController");
const AuthVerifyMiddleware =require('../Middleware/AuthverifyMiddleware');
// User Profile
router.post("/Registration",UsersController.Registration);
router.post("/Login",UsersController.Login);
router.post("/ProfileUpdate",AuthVerifyMiddleware,UsersController.ProfileUpdate);
router.get("/ProfileDetails",AuthVerifyMiddleware,UsersController.ProfileDetails);
router.get("/RecoverVerifyEmail/:email",UsersController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UsersController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UsersController.RecoverResetPass);

// Brands
router.post("/CreateBrand",AuthVerifyMiddleware,BrandsController.CreateBrand);
router.post("/UpdateBrand/:id",AuthVerifyMiddleware,BrandsController.UpdateBrand);
router.get("/BrandList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,BrandsController.BrandList);
router.get("/BrandDropDown",AuthVerifyMiddleware,BrandsController.BrandDropDown);
// router.get("/DeleteBrand/:id",AuthVerifyMiddleware,BrandsController.DeleteBrand);
// router.get("/BrandDetailsByID/:id",AuthVerifyMiddleware,BrandsController.BrandDetailsByID);


// Categories
router.post("/CreateCategories",AuthVerifyMiddleware,CategoriesController.CreateCategories);
router.post("/UpdateCategories/:id",AuthVerifyMiddleware,CategoriesController.UpdateCategories);
router.get("/CategoriesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CategoriesController.CategoriesList);
router.get("/CategoriesDropDown",AuthVerifyMiddleware,CategoriesController.CategoriesDropDown);
// router.get("/DeleteCategories/:id",AuthVerifyMiddleware,CategoriesController.DeleteCategories);
// router.get("/CategoriesDetailsByID/:id",AuthVerifyMiddleware,CategoriesController.CategoriesDetailsByID);


// Customers
router.post("/CreateCustomers",AuthVerifyMiddleware,CustomersController.CreateCustomers);
router.post("/UpdateCustomers/:id",AuthVerifyMiddleware,CustomersController.UpdateCustomers);
router.get("/CustomersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CustomersController.CustomersList);
router.get("/CustomersDropDown",AuthVerifyMiddleware,CustomersController.CustomersDropDown);
// router.get("/DeleteCustomer/:id",AuthVerifyMiddleware,CustomersController.DeleteCustomer);
// router.get("/CustomersDetailsByID/:id",AuthVerifyMiddleware,CustomersController.CustomersDetailsByID);



// Suppliers
router.post("/CreateSuppliers",AuthVerifyMiddleware,SuppliersController.CreateSuppliers);
router.post("/UpdateSuppliers/:id",AuthVerifyMiddleware,SuppliersController.UpdateSuppliers);
router.get("/SuppliersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,SuppliersController.SuppliersList);
router.get("/SuppliersDropDown",AuthVerifyMiddleware,SuppliersController.SuppliersDropDown);
// router.get("/DeleteSupplier/:id",AuthVerifyMiddleware,SuppliersController.DeleteSupplier);
// router.get("/SuppliersDetailsByID/:id",AuthVerifyMiddleware,SuppliersController.SuppliersDetailsByID);



module.exports =router;