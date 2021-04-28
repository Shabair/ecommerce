import React from "react";
import { Redirect } from "react-router-dom";

//pages
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import About from '../pages/About'
import Shop from '../pages/Ecommerce/Shop'
import Signup from '../pages/Auth/Signup'
import Login from '../pages/Auth/Login'
//admin
import Dashboard from '../pages/Admin/Dashboard'
import Products from '../pages/Admin/Products/ProductsList'
import AddProduct from '../pages/Admin/Products/AddProduct'


const authProtectedRoutes = [
	/*

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
	*/
	{ path: "/profile", exact:true ,component: Profile, pageTitle:"Profile" },
	
];

const adminProtectedRoutes = [
	/*

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
	*/
	{ path: "/admin", exact:true ,component: Dashboard, pageTitle:"Dashboard" },
	{ path: "/products", exact:true ,component: Products, pageTitle:"Products List" },
	{ path: "/product/add", exact:true ,component: AddProduct, pageTitle:"Add Product" },
	
];

const publicRoutes = [

	{ path: "/", exact: true, component: Home ,pageTitle:"Home"},
	{ path: "/shop", exact: true, component: Shop ,pageTitle:"Shop"},
	{ path: "/about", exact: true, component: About ,pageTitle:"About"},
	{ path: "/signup", exact: true, component: Signup ,pageTitle:"Sign Up"},
	{ path: "/login", exact: true, component: Login ,pageTitle:"Login In"},
	// { path: "/logout", exact: true, component: ()=>{return <Redirect to="/" />} ,pageTitle:""},
	
	/*

	{ path: "/pages-404", component: Error404 },
	{ path: "/pages-500", component: Error500 },

	*/
];

export { authProtectedRoutes, publicRoutes, adminProtectedRoutes };
