import { Spinner } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { SpinnerPropsType } from "../../types/PropsTypes";

type Props = SpinnerPropsType;

export const SpinnerIcon: VFC<Props> = memo((props: Props) => {
	const { size, color, emptyColor, speed, thickness } = props;
	return <Spinner size={size} color={color} emptyColor={emptyColor} speed={speed} thickness={thickness} />;
});
