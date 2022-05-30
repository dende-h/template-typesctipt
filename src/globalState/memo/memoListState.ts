import { atom } from "recoil";
import { FetchMemoList } from "../../types/fetchMemoList";

const initialMemoListState: Array<FetchMemoList> = [];

export const memoListState = atom({
	key: "memoListState",
	default: initialMemoListState
});
