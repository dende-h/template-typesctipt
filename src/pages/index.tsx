import { memo, useEffect } from "react";
import { Button, Flex } from "@chakra-ui/react";
import FirstPageFooterLayout from "../components/templates/FirstPageFooterLayout";
import { AppIntroduction } from "../components/organism/AppIntroduction";
import { AppIntroductionImage } from "../components/organism/AppIntroductionImage";
import { Head } from "../components/templates/Head";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getSupabase } from "../utils/supabase";
import Link from "next/link";

const Index = ({ user }) => {
	console.log(user);
	const supabase = getSupabase(user.accessToken);
	const fetchNote = async () => {
		const { data: note } = await supabase.from("note").select("*");
		console.log(note);
	};

	useEffect(() => {
		fetchNote();
	}, []);

	const category = "memo";
	const date = "2022/3/21";
	const description = "kaimono";
	const title = "oniyama";

	const post = async () => {
		const { data, error } = await supabase
			.from("note")
			.insert({ title, date, description, category, user_id: user.sub });
		if (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>IntroducePage -Note me</title>
			</Head>
			<Link href="/api/auth/logout">
				<a>Logout</a>
			</Link>
			<Button onClick={post}>ぼたん</Button>
		</>
	);
};
export const getServerSideProps = withPageAuthRequired({
	async getServerSideProps({ req, res }) {
		const {
			user: { accessToken }
		} = getSession(req, res);

		const supabase = getSupabase(accessToken);

		const { data: note } = await supabase.from("note").select("*");

		return {
			props: { note }
		};
	}
});

export default Index;
