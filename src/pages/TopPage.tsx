import { memo } from "react";
import { Calendar } from "../components/organism/Calendar";
import { MemoList } from "../components/organism/MemoList";
import HeaderLayout from "../components/templates/HeaderLayout";
import { Flex } from "@chakra-ui/react";
import { Head } from "../components/templates/Head";

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
