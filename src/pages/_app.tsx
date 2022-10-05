import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
	return (
			<RecoilRoot>
				<Toaster position="top-center" reverseOrder={false} />
					<Component {...pageProps} />
			</RecoilRoot>
	);
}

export default MyApp;
