import { atom } from "recoil";

const initialIsOnSwitch = true;

export const isOnSwitch = atom({
	key: "switchState",
	default: initialIsOnSwitch
});
