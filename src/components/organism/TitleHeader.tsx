import { Box, Heading, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { ChildrenProps } from "../../types/ChildrenProps";
import { ReadMe } from "../molecule/ReadMe";
import { LoginForm } from "./LoginForm";
type Props = ChildrenProps;

export const TitleHeader: VFC<Props> = memo(() => {
	return (
		<>
			<Box
				position={"relative"}
				w="100%"
				h={["1000px", "1000px", "800px"]}
				backgroundImage={`url(${process.env.PUBLIC_URL}/business-pug-working-on-laptop.jpg)`}
				backgroundPosition={"bottom"}
				backgroundSize={"cover"}
				zIndex={1}
				_after={{
					content: `""`,
					position: "absolute",
					zIndex: 2,
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					backgroundColor: "white",
					opacity: 0.5
				}}
			>
				<Stack position={"relative"} zIndex={3} textAlign={"center"}>
					<Box p={20}>
						<Heading fontFamily={"cursive"} color="teal" as="h1" size="lg" p={10} fontSize={["30px", "40px", "60px"]}>
							Let’s “ Note Me ”
						</Heading>
						<Box p={5}>
							<LoginForm />
						</Box>
						<Box>
							<ReadMe />
						</Box>
					</Box>
				</Stack>
			</Box>
		</>
	);
});
