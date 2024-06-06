import {IElement} from "./common/interfaces/elements.interface";

export const DUMMY_DATA_ELEMENTS:IElement[] = []

for (let i = 1; i <= 300; i++) {
    DUMMY_DATA_ELEMENTS.push({
        id: i,
        name: `Element ${i}`
    });
}