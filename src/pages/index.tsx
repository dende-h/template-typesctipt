import { memo } from "react";
import { Flex } from "@chakra-ui/react";
import FirstPageFooterLayout from "../components/templates/FirstPageFooterLayout";
import { AppIntroduction } from "../components/organism/AppIntroduction";
import { AppIntroductionImage } from "../components/organism/AppIntroductionImage";
import { Head } from "../components/templates/Head";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const Index = memo(() => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>IntroducePage -Note me</title>
			</Head>
			<FirstPageFooterLayout>
				<Flex>
					<AppIntroductionImage />
					<AppIntroduction />
				</Flex>
			</FirstPageFooterLayout>
		</>
	);
});
export const getServerSideProps = withPageAuthRequired();

export default Index;
