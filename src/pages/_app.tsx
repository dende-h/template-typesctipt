import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<RecoilRoot>
				<Toaster position="top-center" reverseOrder={false} />
				<Component {...pageProps} />
			</RecoilRoot>
		</ChakraProvider>
	);
}

export default MyApp;
