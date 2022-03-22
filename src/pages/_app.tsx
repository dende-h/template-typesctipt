import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "@auth0/nextjs-auth0";
import theme from "../theme";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import HeaderLayout from "../components/templates/HeaderLayout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<RecoilRoot>
				<Toaster position="top-center" reverseOrder={false} />
				<UserProvider>
					<HeaderLayout>
						<Component {...pageProps} />
					</HeaderLayout>
				</UserProvider>
			</RecoilRoot>
		</ChakraProvider>
	);
}

export default MyApp;
