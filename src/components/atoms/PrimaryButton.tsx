import { Button } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { PrimaryButtonProps } from "../../types/PropsTypes";

type Props = PrimaryButtonProps;

export const PrimaryButton: VFC<Props> = memo((props: Props) => {
	const { children, mx, my, borderRadius, p, bgColor, isDisabled, shadow, size, color, _hover, onClick } = props;
	return (
		<Button
			mx={mx}
			my={my}
			borderRadius={borderRadius}
			p={p}
			bgColor={bgColor}
			isDisabled={isDisabled}
			shadow={shadow}
			size={size}
			color={color}
			_hover={_hover}
			onClick={onClick}
		>
			{children}
		</Button>
	);
});
