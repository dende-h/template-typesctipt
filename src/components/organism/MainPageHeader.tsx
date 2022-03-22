import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

import { useSetRecoilState } from "recoil";
import { isAuthenticated } from "../../globalState/isAuthenticated";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { handleAuth } from "@auth0/nextjs-auth0";

export const MainPageHeader = memo(() => {
	const setIsAuth = useSetRecoilState(isAuthenticated);
	const router = useRouter();
	const onClickRouter = () => {
		setIsAuth(false);
		localStorage.removeItem("authToken");
		router.push("/");
	};
	return (
		<>
			<Flex bg="teal.100" w="100%" h={["50px", "60px", "70px"]} justifyContent={"center"} fontFamily={"cursive"}>
				<Box as={"h1"} p={[0, 1, 2]} fontSize={["md", "xl", "xx-large"]}>
					“ Note Me ”
				</Box>
				<Box p={[0, 1, 5]} _hover={{ color: "blue" }}>
					<Link href={"/TodoBoardPage"}>
						<Text as={"a"}>Show TodoBoard</Text>
					</Link>
				</Box>
				<Box p={[0, 1, 5]} _hover={{ color: "blue" }}>
					<Link href={"/TopPage"}>
						<Text as={"a"}>Show Calendar</Text>
					</Link>
				</Box>
				<Spacer />
				<Box p={[0, 2, 3]}>
					<PrimaryButton bgColor={"telegram.500"} color={"gray.50"} _hover={{ opacity: 0.6 }}>
						<a href="/api/auth/logout">ログアウト</a>
					</PrimaryButton>
				</Box>
			</Flex>
		</>
	);
});
