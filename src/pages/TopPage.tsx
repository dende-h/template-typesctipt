import { useEffect, useState } from "react";

import { getSupabase } from "../utils/supabase";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

import Head from "next/head";
import Link from "next/link";

const TopPage = ({ user }) => {
	console.log(user);
	const supabase = getSupabase(user.access_token);
	const fetchNote = async () => {
		const { data: note } = await supabase.from("note").select("*");
		console.log(note);
	};

	useEffect(() => {
		fetchNote();
	}, []);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>TopPage -Note me</title>
			</Head>
			<Link href="/api/auth/logout">
				<a>Logout</a>
			</Link>
		</>
	);
};
export const getServerSideProps = withPageAuthRequired({
	async getServerSideProps({ req, res }) {
		const {
			user: { accessToken }
		} = await getSession(req, res);

		const supabase = getSupabase(accessToken);

		const { data: note } = await supabase.from("note").select("*");

		return {
			props: { note }
		};
	}
});

export default TopPage;
