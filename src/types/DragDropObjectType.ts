import { FetchMemoList } from "./FetchMemoList";

export type DragDropObjectType = {
	dragItem: {
		[todoId: string]: FetchMemoList;
	};
	dropZone: {
		[columnId: string]: {
			id: string;
			title: string;
			todoIds: (string | undefined)[] | never[];
		};
	};
	dropZoneOrder: string[];
};
