import React from "react";
import { Redirect } from "react-router-dom";

//pages
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import About from '../pages/About'


const authProtectedRoutes = [
/*

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
	*/
	{ path: "/profile", exact:true ,component: Profile, pageTitle:"Profile" },
	
];

const publicRoutes = [
	{ path: "/", exact: true, component: Home ,pageTitle:"Home"},
	{ path: "/about", exact: true, component: About ,pageTitle:"About"},
	/*

	{ path: "/pages-404", component: Error404 },
	{ path: "/pages-500", component: Error500 },

	*/
];

export { authProtectedRoutes, publicRoutes };
