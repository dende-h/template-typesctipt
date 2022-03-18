import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { todoDragDropObjectState } from "../globalState/board/todoDragDropObjectState";
import { DragDropObjectType } from "../types/DragDropObjectType";
import { FetchMemoList } from "../types/FetchMemoList";

type DragDropObject = DragDropObjectType;

export const useDragDropData = () => {
	const [todoList, setTodoList] = useRecoilState(todoDragDropObjectState);
	const setApiData = useCallback((initialMemoData: FetchMemoList[]) => {
		const categoryIsTodoList = initialMemoData.filter((item) => {
			return item.category === "TODO";
		});
		const colmun1DragItems = categoryIsTodoList.filter((item) => {
			return item.mark_div === 0;
		});
		const todoDragItemIds = colmun1DragItems.map((item) => {
			return item.id;
		});

		const colmun2DragItems = categoryIsTodoList.filter((item) => {
			return item.mark_div === 1;
		});
		const inProgressDragItemIds = colmun2DragItems.map((item) => {
			return item.id;
		});
		const colmun3DragItems = categoryIsTodoList.filter((item) => {
			return item.mark_div === 2;
		});
		const completedDragItemIds = colmun3DragItems.map((item) => {
			return item.id;
		});

		const todoDragItemObjectArray = categoryIsTodoList.map((item) => {
			return { [`${item.id}`]: item };
		});

		const todoDragItemObjects = todoDragItemObjectArray.reduce((result, item) => {
			const key = Object.keys(item)[0];
			result[key] = item[key];
			return result;
		}, {});

		const todoDragDropObject: DragDropObject = {
			dragItem: todoDragItemObjects,
			dropZone: {
				"column-1": { id: "column-1", title: "Todo", todoIds: todoDragItemIds },
				"column-2": {
					id: "column-2",
					title: "In Progress",
					todoIds: inProgressDragItemIds
				},
				"column-3": { id: "column-3", title: "Completed", todoIds: completedDragItemIds }
			},
			dropZoneOrder: ["column-1", "column-2", "column-3"]
		};

		setTodoList(todoDragDropObject);
	}, []);

	return { todoList, setApiData, setTodoList };
};
