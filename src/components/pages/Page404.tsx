import { Box } from "@chakra-ui/react";
import { memo } from "react";

import { PrimaryButton } from "../atoms/PrimaryButton";
import { Head } from "../templates/Head";

const Page404 = memo(() => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>404Page -Note me</title>
			</Head>
			<Box
				backgroundImage={`url(${process.env.PUBLIC_URL}/Na_June_67.jpg)`}
				backgroundPosition="bottom"
				backgroundSize="cover"
				textAlign={"center"}
				w="100%"
				h={"1100px"}
			>
				<Box>
					<a href="https://jp.freepik.com/vectors/computer">
						Jcomp - jp.freepik.com によって作成された computer ベクトル
					</a>
				</Box>
				<Box>
					<PrimaryButton bgColor={"cyan.600"} color={"white"}>
						<Link to={"/"}>Topへ戻る</Link>
					</PrimaryButton>
				</Box>
			</Box>
		</>
	);
});
export default Page404;
