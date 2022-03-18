import { useDisclosure } from "@chakra-ui/react";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { completedFlag } from "../globalState/board/completedFlag";

export const useModalOpen = () => {
	const { onOpen, onClose, isOpen } = useDisclosure();
	const setIsCompleted = useSetRecoilState(completedFlag);
	const modalOpenAndClose: (TimeToClose: number) => void = useCallback((TimeToClose) => {
		onOpen();
		setTimeout(() => {
			onClose();
			setIsCompleted(false);
		}, TimeToClose);
	}, []);
	const modalOpen: () => void = useCallback(() => {
		onOpen();
	}, []);
	return { modalOpen, modalOpenAndClose, onClose, isOpen };
};
