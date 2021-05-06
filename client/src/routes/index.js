import Layout from '../components/HorizontalLayout/Layout'
import AdminLayout from '../components/VerticalLayout/Layout'

import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, pageTitle,...rest }) => (
	<Route
		{...rest}
		render={props =>
			//isAuthenticated()
			(1) ? (
				<Layout pageTitle={pageTitle}>
					<Component {...props} />
				</Layout>
			) : (
				<Redirect
					to={{
						pathname: "/login",
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
);


const AdminRoute = ({ component: Component, pageTitle,...rest }) => (
	<Route
		{...rest}
		render={props =>
		//isAuthenticated() && isAuthenticated().user.role === 1
			(1) ? (
				<AdminLayout pageTitle={pageTitle}>
					<Component {...props} />
				</AdminLayout>
			) : (
				<Redirect
					to={{
						pathname: "/login",
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
);

const PublicRoute = ({ component: Component, pageTitle,...rest }) => (
	<Route
		{...rest}
		render={props =>
			<Layout pageTitle={pageTitle}>
				<Component {...props} />
			</Layout>
		}
	/>
);

export {PublicRoute, AdminRoute, PrivateRoute };

const isAuthenticated = () => {
	if (typeof window == 'undefined') {
		return false;
	}
	if (localStorage.getItem('jwt')) {
		return JSON.parse(localStorage.getItem('jwt'));
	} else {
		return false;
	}
};
