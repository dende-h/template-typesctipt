import { Box, Button, Divider, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { useAuthLogin } from "../../hooks/useAuthLogin";
import { useInputForm } from "../../hooks/useInputForm";
import { PasswordInput } from "../molecule/PasswordInput";

export const LoginForm: VFC = memo(() => {
	const email = useInputForm();
	const password = useInputForm();

	const authKey = { email: email.value, password: password.value };

	const { authLogin, loading } = useAuthLogin();

	const onClickLoginButton: React.MouseEventHandler<HTMLButtonElement> = () => authLogin(authKey);

	return (
		<>
			<Flex justify="center" minHeight="">
				<Box bg="blue.50" w="sm" p={4} borderRadius="md" shadow="md">
					<Heading color="teal" as="h1" size="lg" textAlign="center" fontFamily={"cursive"}>
						User Login Form
					</Heading>
					<Divider my={2} />
					<Stack spacing={6} py={4} px={10}>
						<Input
							bg="grey.200"
							placeholder="Enter email"
							type={"email"}
							value={email.value}
							onChange={email.onChangeInputForm}
						/>
						<PasswordInput
							bg="grey.200"
							placeholder="Enter Password"
							value={password.value}
							onChange={password.onChangeInputForm}
						/>
						<Button
							colorScheme={"twitter"}
							outline="none"
							onClick={onClickLoginButton}
							isDisabled={loading}
							isLoading={loading}
						>
							ログイン
						</Button>
						<Link to={"/"}>
							{" "}
							<Text
								as={"h1"}
								fontSize={"15px"}
								fontFamily={"serif"}
								_hover={{ color: "teal", fontWeight: "bold", textDecoration: "underline" }}
							>
								アカウントをお持ちでない方は新規登録
							</Text>
						</Link>
					</Stack>
				</Box>
			</Flex>
		</>
	);
});
