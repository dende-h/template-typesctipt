import { memo, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { LoginForm } from "../organism/LoginForm";
import { Head } from "../templates/Head";
import TitleHeaderFooterLayout from "../templates/TitleHeaderFooterLayout";

export const Login = memo(() => {
	const { state } = useLocation();
	const [trueCount, setTrueCount] = useState<number>(0);
	useEffect(() => {
		if (state === true) {
			setTrueCount(trueCount + 1);
		}
		if (trueCount === 1) {
			toast("Good Job!", {
				icon: "👏"
			});
		}
	}, [state]);
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
