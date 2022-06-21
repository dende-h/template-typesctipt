import { selector } from "recoil";
import { DragDropObjectType } from "../../types/dragDropObjectType";
import { memoListState } from "../memo/memoListState";

type DragDropObject = DragDropObjectType;
const columnNumbers = { todo: 0, inProgress: 1, completed: 2 };

export const dragDropDataSelector = selector({
	key: "dragDropDataSelector",
	get: ({ get }) => {
		const categoryIsTodoList = get(memoListState).filter((item) => {
			return item.category === "TODO";
		});
		const colmun1DragItems = categoryIsTodoList.filter((item) => {
			return item.mark_div === columnNumbers.todo;
		});
		const todoDragItemIds = colmun1DragItems.map((item) => {
			return item.id;
		});

		const colmun2DragItems = categoryIsTodoList.filter((item) => {
			return item.mark_div === columnNumbers.inProgress;
		});
		const inProgressDragItemIds = colmun2DragItems.map((item) => {
			return item.id;
		});
		const colmun3DragItems = categoryIsTodoList.filter((item) => {
			return item.mark_div === columnNumbers.completed;
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

		return todoDragDropObject;
	}
});
