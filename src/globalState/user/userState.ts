import { atom } from "recoil";
import { User } from "../../types/user";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
	key: "recoil-persist",
	storage: typeof window === "undefined" ? undefined : sessionStorage //修正
});

const initialUserState: User = {
	accessToken: "",
	name: "",
	nickname: ""
};
export const userState = atom({
	key: "userState",
	default: initialUserState,
	effects_UNSTABLE: [persistAtom]
});
