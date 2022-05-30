import { atom } from "recoil";
import { User } from "../../types/user";

const initialUserState: User = {
	accessToken: ""
};
export const userState = atom({
	key: "userState",
	default: initialUserState
});
