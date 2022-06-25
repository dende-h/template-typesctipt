import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode, memo, VFC } from "react";

type Props = ButtonProps & {
	childlen: ReactNode;
};

export const PrimaryButton: VFC<Props> = memo((props: Props) => {
	const { children, ...ButtonProps } = props;
	return <Button {...ButtonProps}>{children}</Button>;
});
