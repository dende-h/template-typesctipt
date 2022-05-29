import { Box, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { memo, useEffect, VFC } from "react";
import toast from "react-hot-toast";
import { useUser } from "@auth0/nextjs-auth0";
import { PrimaryButton } from "../atoms/PrimaryButton";
import { useRouter } from "next/router";

export const AppIntroduction: VFC = memo(() => {
	const introductionTexts = ["ちょっとしたメモ", "予定のカレンダー", "TODOリスト"];
	const router = useRouter();

	return (
		<Box
			backgroundImage="/KAZ829001.jpg"
			backgroundSize={["cover"]}
			w={"70%"}
			h={"800px"}
			opacity={"0.8"}
			textAlign={"center"}
		>
			<Stack>
				<Text as={"h1"} fontSize={["35px"]} fontFamily={"cursive"}>
					A simple notepad that manages everything
				</Text>
				<Text as={"h1"} fontSize={"75px"} fontFamily={"cursive"} padding={"16"}>
					“ Note Me ”
				</Text>
				{introductionTexts.map((item) => {
					return (
						<Box key={item}>
							<Text fontFamily={"serif"} fontSize={"30px"}>
								{item}
							</Text>
						</Box>
					);
				})}
				<Text as={"h1"} fontSize={"35px"} fontFamily={"serif"}>
					全てまとめてシンプルに管理する
				</Text>
				<Box p={6}>
					<PrimaryButton bgColor="teal.400" size="lg" _hover={{ opacity: 0.6 }}>
						<Link href={"/api/auth/signup"}>
							<a>新規アカウント登録</a>
						</Link>
					</PrimaryButton>
				</Box>
				<Link href={"/"}>
					<Text
						as={"a"}
						fontSize={"20px"}
						fontFamily={"serif"}
						_hover={{ color: "teal", fontWeight: "bold", textDecoration: "underline" }}
					>
						すでにアカウントをお持ちの方はこちらからログイン
					</Text>
				</Link>
			</Stack>
		</Box>
	);
});
