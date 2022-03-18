import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isAuthenticated = atom({
	key: "isAuthenticated",
	default: false,
	effects_UNSTABLE: [persistAtom]
});
