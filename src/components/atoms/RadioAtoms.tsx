import { Radio } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { RadioAtomsProps } from "../../types/propsTypes";

type Props = RadioAtomsProps;

export const RadioAtoms: VFC<Props> = memo((props: Props) => {
	const { children, value } = props;
	return (
		<>
			<Radio value={value}>{children}</Radio>
		</>
	);
});
