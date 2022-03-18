import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { memo } from "react";

import { Head } from "../components/templates/Head";

const Blank = memo(() => {
	const router = useRouter();
	setTimeout(() => {
		router.push("/login");
	}, 5000);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>BluffPage -Note me</title>
			</Head>
			<Box bg="black" w="100%" h="2000px">
				これは嘘です
			</Box>
		</>
	);
});
export default Blank;
