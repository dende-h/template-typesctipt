import { memo } from "react";

import { LoginForm } from "../components/organism/LoginForm";
import { Head } from "../components/templates/Head";
import TitleHeaderFooterLayout from "../components/templates/TitleHeaderFooterLayout";

const Login = memo(() => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>LoginPage -Note me</title>
			</Head>
			<TitleHeaderFooterLayout>
				<LoginForm />
			</TitleHeaderFooterLayout>
		</>
	);
});
export default Login;
