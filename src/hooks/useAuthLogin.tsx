import { AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { useRecoilState } from "recoil";
import { isAuthenticated } from "../globalState/isAuthenticated";
import { loginApi } from "../libs/api";

type Props = {
	email: string;
	password: string;
};
export const useAuthLogin = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [isAuth, setIsAuth] = useRecoilState(isAuthenticated);
	const navigate: NavigateFunction = useNavigate();
	const authLogin = useCallback(async (authKey: Props) => {
		try {
			setLoading(true);
			const result: AxiosResponse = await loginApi.post("/login", authKey);
			localStorage.setItem("authToken", result.data.access_token);
			setIsAuth(true);
			navigate("/top", { state: result, replace: false });
		} catch (error) {
			setLoading(false);
			toast.error("ログインできません!");
		}
	}, []);
	return { authLogin, loading, isAuth };
};
