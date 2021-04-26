import React from "react";
import { Route, Redirect } from "react-router-dom";
//layout
import Layout from '../components/HorizontalLayout/Layout'

const AppRoute = ({
	component: Component,
	pageTitle,
	isAuthProtected,
	...rest
}) => (
		<Route
			{...rest}
			render={props => {

				if (isAuthProtected /*&& !localStorage.getItem("authUser") */) {
					return (
						<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
					);
				}

				return (
					<Layout pageTitle={pageTitle}>
						<Component {...props} />
					</Layout>
				);
			}}
		/>
	);

export default AppRoute;

