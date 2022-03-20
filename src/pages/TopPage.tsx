import { memo } from "react";
import { Calendar } from "../components/organism/Calendar";
import { MemoList } from "../components/organism/MemoList";
import HeaderLayout from "../components/templates/HeaderLayout";
import { Flex } from "@chakra-ui/react";
import { Head } from "../components/templates/Head";
import { error } from "console";
import { useMemoApi } from "../hooks/useMemoListApi";
import { useSetRecoilState } from "recoil";
import { useDragDropData } from "../hooks/useDragDropData";
import { memoListState } from "../globalState/memo/memoListState";
import { FetchMemoList } from "../types/FetchMemoList";

const getStaticProps = async () => {
	const { fetchMemoList, memoList, loading } = useMemoApi();
	const setMemoList = useSetRecoilState<FetchMemoList[]>(memoListState);
	const { setApiData } = useDragDropData();
	try {
		await fetchMemoList();
		setMemoList(memoList);
		setApiData(memoList);
	} catch (error) {
		console.log(error);
	}
};

const TopPage = memo(() => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>TopPage -Note me</title>
			</Head>
			<HeaderLayout>
				<Flex>
					<MemoList />
					<Calendar />
				</Flex>
			</HeaderLayout>
		</>
	);
});
export default TopPage;
