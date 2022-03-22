import { Flex } from "@chakra-ui/react";
import { Head } from "../components/templates/Head";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getSupabase } from "../utils/supabase";
import { memoListState } from "../globalState/memo/memoListState";
import { useSetRecoilState } from "recoil";

import { MemoList } from "../components/organism/MemoList";
import { Calendar } from "../components/organism/Calendar";
import { useDragDropData } from "../hooks/useDragDropData";
import { useEffect } from "react";

const Index = ({ note }) => {
	const setMemos = useSetRecoilState(memoListState);
	const { setApiData } = useDragDropData();
	console.log(note);
	useEffect(() => {
		if (note) {
			setMemos(note);
			setApiData(note);
		}
	}, []);

	// const category = "memo";
	// const date = "2022/3/21";
	// const description = "kaimono";
	// const title = "oniyama";

	// const post = async () => {
	// 	const { data, error } = await supabase
	// 		.from("note")
	// 		.insert({ title, date, description, category, user_id: user.sub });
	// 	if (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>TopPage -Note me</title>
			</Head>
			<Flex>
				<MemoList />
				<Calendar />
			</Flex>
		</>
	);
};

export const getServerSideProps = withPageAuthRequired({
	async getServerSideProps({ req, res }) {
		const {
			user: { accessToken }
		} = getSession(req, res);

		const supabase = getSupabase(accessToken);

		const { data: note } = await supabase.from("note").select("*");

		return {
			props: { note }
		};
	}
});

export default Index;
