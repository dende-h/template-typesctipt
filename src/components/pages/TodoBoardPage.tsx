import { memo } from "react";
import { MemoList } from "../organism/MemoList";
import HeaderLayout from "../templates/HeaderLayout";
import { Flex } from "@chakra-ui/react";
import { TodoBoard } from "../organism/TodoBoard";
import { Head } from "../templates/Head";

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
