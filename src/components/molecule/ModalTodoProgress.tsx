import { Box, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
	onClose: () => void;
	isOpen: boolean;
	modalImage: string;
	children: ReactNode;
};

export const ModalTodoProgress: VFC<Props> = (props: Props) => {
	const { onClose, isOpen, modalImage, children } = props;

	return (
		<>
			<Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent w={"auto"}>
					<ModalHeader textAlign={"center"} fontFamily={"cursive"}>
						{children}
					</ModalHeader>
					<ModalBody>
						<Box w={"320px"} h={"213px"} bgImage={modalImage} backgroundSize={"cover"}></Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
