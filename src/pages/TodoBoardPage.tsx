import { memo } from "react";
import { MemoList } from "../components/organism/MemoList";
import HeaderLayout from "../components/templates/HeaderLayout";
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
			<HeaderLayout>
				<Flex>
					<MemoList />
					<TodoBoard />
				</Flex>
			</HeaderLayout>
		</>
	);
});
export default TodoBoardPage;
