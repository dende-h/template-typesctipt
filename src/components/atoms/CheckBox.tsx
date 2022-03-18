import { Checkbox } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { CheckBoxProps } from "../../types/PropsTypes";

type Props = CheckBoxProps;

export const CheckBox: VFC<Props> = memo((props: Props) => {
	const { children, onChange, isChecked, colorScheme, size } = props;
	return (
		<Checkbox colorScheme={colorScheme} onChange={onChange} isChecked={isChecked} size={size}>
			{children}
		</Checkbox>
	);
});
