/* eslint-disable @typescript-eslint/ban-types */
import {
	BackgroundProps,
	BorderProps,
	ButtonOptions,
	ColorProps,
	CSSObject,
	EffectProps,
	SpaceProps,
	SpinnerProps,
	ThemeTypings,
	ThemingProps,
	UseRadioProps
} from "@chakra-ui/react";
import { ReactNode } from "react";

export type PrimaryButtonProps = {
	children: ReactNode;
	mx?: SpaceProps["mx"];
	my?: SpaceProps["my"];
	p?: SpaceProps["p"];
	isDisabled?: ButtonOptions["isDisabled"];
	bgColor?: BackgroundProps["bgColor"];
	borderRadius?: BorderProps["borderRadius"];
	size?: ThemingProps<"Button">["size"];
	color?: ColorProps["color"];
	shadow?: EffectProps["shadow"];
	_hover?: CSSObject | undefined;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export type RadioAtomsProps = {
	children: ReactNode;
	value: UseRadioProps["value"];
};

export type SlideSwitchProps = {
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	size?: ThemingProps<"Button">["size"];
	shadow?: EffectProps["shadow"];
	colorScheme?: ThemeTypings["colorSchemes"] | (string & {});
};

export type CheckBoxProps = {
	children: ReactNode;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	isChecked?: boolean;
	colorScheme?: ThemeTypings["colorSchemes"] | (string & {});
	size?: ThemingProps<"Button">["size"];
};

export type SpinnerPropsType = {
	size?: ThemingProps<"Spinner">["size"];
	color?: SpinnerProps["color"];
	emptyColor?: SpinnerProps["emptyColor"];
	speed?: SpinnerProps["speed"];
	thickness?: SpinnerProps["thickness"];
};
