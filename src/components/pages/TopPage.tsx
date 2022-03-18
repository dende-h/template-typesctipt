import { memo } from "react";
import { Calendar } from "../organism/Calendar";
import { MemoList } from "../organism/MemoList";
import HeaderLayout from "../templates/HeaderLayout";
import { Flex } from "@chakra-ui/react";
import { Head } from "../templates/Head";

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
