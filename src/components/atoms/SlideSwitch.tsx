import { Switch } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { SlideSwitchProps } from "../../types/PropsTypes";

type Props = SlideSwitchProps;

export const SlideSwitch: VFC<Props> = memo((props: Props) => {
	const { onChange, size, colorScheme, shadow } = props;
	return <Switch onChange={onChange} size={size} colorScheme={colorScheme} shadow={shadow} />;
});
