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
		toast.error("ログアウトされました。再度ログインしてください");
		router.push("/api/auth/logout");
	}, []);

	const fetchMemoList = useCallback(async () => {
		setLoading(true);

		const { data, error } = await supabase.from("note").select("*");
		setMemoList(data);
		setLoading(false);
		if (error) {
			authErrorNavigate();
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
		}
	}, []);

	const editMemoList = useCallback(async (id: string | undefined, body: body) => {
		setLoading(true);
		const editData = { ...body, user_id: user.sub };
		const { data, error } = await supabase.from("note").update(editData).eq("id", id);
		console.log(data);
		fetchMemoList();
		if (error) {
			authErrorNavigate();
		}
	}, []);

	const deleteMemoList = useCallback(async (id: string | undefined) => {
		setLoading(true);
		const { data, error } = await supabase.from("note").delete().eq("id", id);
		console.log(data);
		fetchMemoList();
		if (error) {
			authErrorNavigate();
		}
	}, []);

	const editMarkDiv = useCallback(async (id: string | undefined, body: body) => {
		setLoading(true);
		const editData = { ...body, user_id: user.sub };
		await supabase.from("note").update(editData).eq("id", id);
		const { data, error } = await supabase.from("note").select("*");
		setMemoList(data);
		setLoading(false);
		if (error) {
			authErrorNavigate();
		}
	}, []);
	return { fetchMemoList, inputMemoList, editMemoList, deleteMemoList, editMarkDiv, memoList, loading };
};
