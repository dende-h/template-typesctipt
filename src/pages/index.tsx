import { Box, Flex } from "@chakra-ui/react";
import { Head } from "../components/templates/Head";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getSupabase } from "../utils/supabase";
import { memoListState } from "../globalState/memo/memoListState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import HeaderLayout from "../components/templates/HeaderLayout";
import { MemoList } from "../components/organism/MemoList";
import { Calendar } from "../components/organism/Calendar";
import { useEffect, useState } from "react";
import { userState } from "../globalState/user/userState";
import { isShowTodo } from "../globalState/board/isShowTodo";
import { TodoBoard } from "../components/organism/TodoBoard";

const Index = ({ user, note }) => {
	const [isFetched, setIsFetched] = useState(false);
	const setMemos = useSetRecoilState(memoListState);
	const setUser = useSetRecoilState(userState);
	const isShowTodoBoard = useRecoilValue(isShowTodo);

	useEffect(() => {
		if (note) {
			setMemos(note);
			setIsFetched(true);
		}
	}, []);
	useEffect(() => {
		setUser(user);
	}, []);

	return (
		<>
			<HeaderLayout>
				<Head>
					<meta charSet="utf-8" />
					<title>TopPage -Note me</title>
				</Head>
				{isFetched ? (
					<Flex>
						<MemoList />
						{isShowTodoBoard ? <TodoBoard memoList={note} /> : <Calendar />}
					</Flex>
				) : (
					<Box>...Loading</Box>
				)}
			</HeaderLayout>
		</>
	);
};

export const getServerSideProps = withPageAuthRequired({
	async getServerSideProps({ req, res }) {
		const {
			user: { accessToken }
		} = getSession(req, res);

		const supabase = getSupabase(accessToken);

		const { data: note } = await supabase.from("note").select("*").order("created_at", { ascending: true });

		return {
			props: { note }
		};
	}
});

export default Index;
