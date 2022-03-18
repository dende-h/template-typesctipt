import { Box } from "@chakra-ui/react";
import { memo } from "react";

import { Head } from "../templates/Head";

export const Blank = memo(() => {
	const { state } = useLocation();
	const navigate = useNavigate();
	setTimeout(() => {
		navigate("/login", { state, replace: false });
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
