import { PostgrestResponse } from "@supabase/supabase-js";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isAuthenticated } from "../globalState/isAuthenticated";
import { memoListState } from "../globalState/memo/memoListState";
import { userState } from "../globalState/user/userState";
import { memoApi } from "../libs/api";
import { FetchMemoList } from "../types/FetchMemoList";
import { getSupabase } from "../utils/supabase";

type body = Omit<FetchMemoList, "id">;

export const useMemoApi = () => {
	const setIsAuth = useSetRecoilState(isAuthenticated);
	const [loading, setLoading] = useState<boolean>(false);
	const [memoList, setMemoList] = useRecoilState<Array<FetchMemoList>>(memoListState);
	const user = useRecoilValue(userState);
	const supabase = getSupabase(user.accessToken);
	const router = useRouter();
	const authErrorNavigate = useCallback(() => {
		setIsAuth(false);
		localStorage.removeItem("authToken");
		toast.error("ログアウトされました。再度ログインしてください");
		router.push("/Login");
	}, []);

	const fetchMemoList = useCallback(async () => {
		setLoading(true);

		const { data, error } = await supabase.from("note").select("*");
		setMemoList(data);
		setLoading(false);
		if (error) {
			console.log(error);
			setLoading(false);
		}
	}, []);

	const inputMemoList = useCallback(async (body: body) => {
		setLoading(true);
		const insertData = { ...body, user_id: user.sub };
		console.log(insertData);
		const { data, error } = await supabase.from("note").insert(insertData);
		console.log(data);
		fetchMemoList();
		if (error) {
			console.log(error);
			setLoading(false);
		}
	}, []);

	const editMemoList = useCallback(async (id: string | undefined, body: body) => {
		setLoading(true);
		try {
			await memoApi.put(`/memo/${id}`, body);
			fetchMemoList();
		} catch (error) {
			authErrorNavigate();
		}
	}, []);

	const deleteMemoList = useCallback(async (id: string | undefined) => {
		setLoading(true);
		try {
			await memoApi.delete(`/memo/${id}`);
			fetchMemoList();
		} catch (error) {
			authErrorNavigate();
		}
	}, []);

	const editMarkDiv = useCallback(async (id: string | undefined, body: body) => {
		setLoading(true);
		try {
			await memoApi.put(`/memo/${id}`, body);
			const result: AxiosResponse<Array<FetchMemoList>> = await memoApi.get("/memos");
			setMemoList(result.data);
			setLoading(false);
		} catch (error) {
			authErrorNavigate();
		}
	}, []);
	return { fetchMemoList, inputMemoList, editMemoList, deleteMemoList, editMarkDiv, memoList, loading };
};
