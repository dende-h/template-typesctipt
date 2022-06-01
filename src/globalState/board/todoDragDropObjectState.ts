import { atom } from "recoil";
import { DragDropObjectType } from "../../types/dragDropObjectType";

const initialData: DragDropObjectType = { dragItem: {}, dropZone: {}, dropZoneOrder: [] };

export const todoDragDropObjectState = atom({
	key: "todoDragDropObjectState",
	default: initialData
});
