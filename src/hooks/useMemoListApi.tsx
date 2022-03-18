import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { useRecoilState, useSetRecoilState } from "recoil";
import { isAuthenticated } from "../globalState/isAuthenticated";
import { memoListState } from "../globalState/memo/memoListState";
import { memoApi } from "../libs/api";
import { FetchMemoList } from "../types/FetchMemoList";

type body = Omit<FetchMemoList, "id">;

export const useMemoApi = () => {
	const setIsAuth = useSetRecoilState(isAuthenticated);
	const [loading, setLoading] = useState<boolean>(false);
	const [memoList, setMemoList] = useRecoilState<Array<FetchMemoList>>(memoListState);
	const router = useRouter();
	const authErrorNavigate = useCallback(() => {
		setIsAuth(false);
		localStorage.removeItem("authToken");
		toast.error("ログアウトされました。再度ログインしてください");
		router.push("/Login");
	}, []);

	const fetchMemoList = useCallback(async () => {
		setLoading(true);
		try {
			const result: AxiosResponse<Array<FetchMemoList>> = await memoApi.get("/memos");
			setMemoList(result.data);
			setLoading(false);
		} catch (error) {
			authErrorNavigate();
		}
	}, []);

	const inputMemoList = useCallback(async (body: body) => {
		setLoading(true);
		try {
			await memoApi.post("/memo", body);
			fetchMemoList();
		} catch (error) {
			authErrorNavigate();
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
