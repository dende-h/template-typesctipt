import { Box, Flex, Text } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { SlideSwitch } from "../atoms/SlideSwitch";
import { PopoverContainer } from "../templates/PopoverContainer";
import { isOnSwitch } from "../../globalState/Readme/isOnSwitch";

import { memo, useCallback } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export const ReadMe = memo(() => {
	const [isOn, setIsOn] = useRecoilState(isOnSwitch);
	const router = useRouter();
	const onSlideSwitch: (event: React.ChangeEvent<HTMLInputElement>) => void = useCallback(() => {
		setTimeout(() => {
			if (isOn) {
				toast.error("シャットダウンします");
				setIsOn(false);
				router.push("/Blank");
			}
		}, 3000);
		if (!isOn) {
			toast("へいへ～い♪", {
				icon: "👏"
			});
		}
	}, []);

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
						<Text>下のスイッチは絶対に押さないで!!</Text>
					</Box>
				</Flex>
				<PopoverContainer
					trigger={"hover"}
					popoverHeaderText="絶対ONにしないで"
					components={<SlideSwitch onChange={onSlideSwitch} />}
				>
					{isOn ? (
						<Text>ダメですよ？なにしてるんですか？ホバーを外してください</Text>
					) : (
						<Text>びっくりしましたか？ちょっとしたドッキリですW</Text>
					)}
				</PopoverContainer>
			</Box>
		</PopoverContainer>
	);
});
