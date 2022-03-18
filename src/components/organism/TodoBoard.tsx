//ライブラリインポート
import { Box, HStack } from "@chakra-ui/react";
import { memo } from "react";
import { DragDropContext, DropResult, ResponderProvided } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { completedFlag } from "../../globalState/board/completedFlag";

//srcインポート
import { useDragDropData } from "../../hooks/useDragDropData";
import { useMemoApi } from "../../hooks/useMemoListApi";
import { useModalOpen } from "../../hooks/useModalOpen";
import { bodyType } from "../../types/bodyType";
import { ColumnDropArea } from "../molecule/ColumnDropArea";
import { ModalTodoProgress } from "../molecule/ModalTodoProgress";

type onDragEnd = (result: DropResult, provided: ResponderProvided) => void;

export const TodoBoard = memo(() => {
	const { todoList, setTodoList } = useDragDropData();
	const { editMarkDiv, loading } = useMemoApi();
	const { modalOpenAndClose, onClose, isOpen } = useModalOpen();
	const [isCompleted, setIsCompleted] = useRecoilState<boolean>(completedFlag);
	const inProgressImage = `url(${process.env.PUBLIC_URL}/inProgressImage.jpg)`;
	const completedImage = `url(${process.env.PUBLIC_URL}/completedImage.jpg)`;

	const columnIds = todoList.dropZoneOrder;

	const changeMarkDiv = async (draggableId: string, markDivNumber: number) => {
		const droppedItem = todoList.dragItem[draggableId];
		const editMark: bodyType = { ...droppedItem, mark_div: markDivNumber };
		delete editMark.id;
		editMarkDiv(droppedItem.id, editMark);
	};

	const onDragEnd: onDragEnd = (result) => {
		//DragDropContextのpropsドラッグが終了したときの処理
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (destination) {
			const start = todoList.dropZone[source.droppableId];
			const finish = todoList.dropZone[destination.droppableId];

			if (destination.droppableId === source.droppableId && destination.index === source.index) {
				return;
			}

			if (start === finish) {
				const newTodoIds = Array.from(start.todoIds);
				newTodoIds.splice(source.index, 1);
				newTodoIds.splice(destination.index, 0, draggableId);

				const newColumn = {
					...start,
					todoIds: newTodoIds
				};

				const newState = {
					...todoList,
					dropZone: {
						...todoList.dropZone,
						[newColumn.id]: newColumn
					}
				};
				setTodoList(newState);
				return;
			}
			const startTodoIds = Array.from(start.todoIds);
			startTodoIds.splice(source.index, 1);
			const newStart = {
				...start,
				todoIds: startTodoIds
			};
			const finishTodoIds = Array.from(finish.todoIds);
			finishTodoIds.splice(destination.index, 0, draggableId);
			const newFinish = {
				...finish,
				todoIds: finishTodoIds
			};
			const newState = {
				...todoList,
				dropZone: {
					...todoList.dropZone,
					[newStart.id]: newStart,
					[newFinish.id]: newFinish
				}
			};
			setTodoList(newState);
			if (finish.id === "column-1") {
				changeMarkDiv(draggableId, 0);
			}
			if (finish.id === "column-2") {
				changeMarkDiv(draggableId, 1);
				modalOpenAndClose(1800);
			}
			if (finish.id === "column-3") {
				setIsCompleted(true);
				changeMarkDiv(draggableId, 2);
				modalOpenAndClose(1800);
			}
		}
	};
	return (
		<>
			<Box w={"100%"} m={4} overflowX="scroll">
				{isCompleted ? (
					<ModalTodoProgress onClose={onClose} isOpen={isOpen} modalImage={completedImage}>
						Completed! Good job!!
					</ModalTodoProgress>
				) : (
					<ModalTodoProgress onClose={onClose} isOpen={isOpen} modalImage={inProgressImage}>
						Todo started! Good luck!!
					</ModalTodoProgress>
				)}
				<DragDropContext onDragEnd={onDragEnd}>
					<HStack spacing={6}>
						{columnIds.map((columnId) => {
							const columns = todoList.dropZone[columnId];
							const todoArray = columns.todoIds.map((todoId) => {
								if (todoId) {
									return todoList.dragItem[todoId];
								}
							});
							return (
								<ColumnDropArea
									key={columns.id}
									id={columns.id}
									title={columns.title}
									todoArray={todoArray}
									loading={loading}
								/>
							);
						})}
					</HStack>
				</DragDropContext>
			</Box>
		</>
	);
});
