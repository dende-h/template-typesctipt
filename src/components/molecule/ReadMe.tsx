import { Box, Flex, Text } from "@chakra-ui/react";
import { PopoverContainer } from "../templates/PopoverContainer";
import { memo } from "react";

export const ReadMe = memo(() => {
	return (
		<PopoverContainer trigger="click" buttonName="Click read me" popoverHeaderText="なんでもメモアプリ">
			<Box>
				<Flex>
					<Box wordBreak={"break-all"} textAlign={"left"}>
						<Text>サンプル用に実装されたAPIを利用してCRUD処理実装したメモアプリです。</Text>
						<Text>ログイン用のTokenは24時間で失効すします。</Text>
						<Text>下記のログイン情報でお試しください。</Text>
						<Text>Mail : dende@example.com</Text>
						<Text>pass : dende0206</Text>
					</Box>
				</Flex>
			</Box>
		</PopoverContainer>
	);
});
