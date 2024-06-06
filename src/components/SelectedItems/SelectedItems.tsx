import {IElement} from "../../common/interfaces/elements.interface";
import React from "react";

interface SelectedItemsProp  {
    selectedItems: IElement[];
}

const SelectedItems: React.FC<SelectedItemsProp> = ({selectedItems}) => {
    return (
        <>
            <div>You currently have {selectedItems.length} selected items</div>
            <div>
                {selectedItems.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </>
    )
}

export default SelectedItems;