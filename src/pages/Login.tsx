import { memo, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRecoilValue } from "recoil";

import { LoginForm } from "../components/organism/LoginForm";
import { Head } from "../components/templates/Head";
import TitleHeaderFooterLayout from "../components/templates/TitleHeaderFooterLayout";
import { isOnSwitch } from "../globalState/Readme/isOnSwitch";

const Login = memo(() => {
	const isOn = useRecoilValue(isOnSwitch);
	const [trueCount, setTrueCount] = useState<number>(0);
	useEffect(() => {
		if (isOn) {
			setTrueCount(trueCount + 1);
		}
		if (trueCount === 1) {
			toast("Good Job!", {
				icon: "👏"
			});
		}
	}, [isOn]);
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
