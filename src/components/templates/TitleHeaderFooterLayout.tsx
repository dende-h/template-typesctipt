import { memo, VFC } from "react";
import { ChildrenProps } from "../../types/ChildrenProps";
import { TitleFooter } from "../organism/TitleFooter";
import { TitleHeader } from "../organism/TitleHeader";

type Props = ChildrenProps;

const TitleHeaderFooterLayout: VFC<Props> = memo((props: Props) => {
	const { children } = props;
	return (
		<>
			<TitleHeader>{children}</TitleHeader>
			<TitleFooter />
		</>
	);
});
export default TitleHeaderFooterLayout;
