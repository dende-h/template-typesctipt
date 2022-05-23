import { atom } from "recoil";
import { user } from "../../types/user";

const initialUserState: user = {
	accessToken: ""
};
export const userState = atom({
	key: "userState",
	default: initialUserState
});
