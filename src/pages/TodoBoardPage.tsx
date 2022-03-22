import { memo } from "react";
import { MemoList } from "../components/organism/MemoList";
import { Flex } from "@chakra-ui/react";
import { TodoBoard } from "../components/organism/TodoBoard";
import { Head } from "../components/templates/Head";

const TodoBoardPage = memo(() => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>TopPage -Note me</title>
			</Head>
			<Flex>
				<MemoList />
				<TodoBoard />
			</Flex>
		</>
	);
});
export default TodoBoardPage;
