import {IElement} from "../../common/interfaces/elements.interface";
import React from "react";
import SelectedPill from "../SelectedPill/SelectedPill";

interface SelectedItemsProp  {
    selectedItems: IElement[];
    onRemoveSelectedItem: (id: number) => void;
}

const SelectedItems: React.FC<SelectedItemsProp> = ({selectedItems, onRemoveSelectedItem}) => {
    return (
        <>
            <div>You currently have {selectedItems.length} selected items</div>
            <div>
                {selectedItems.map(item => (
                    <SelectedPill key={item.id} item={item} handleRemoveSelectedItem={onRemoveSelectedItem} />
                ))}
            </div>
        </>
    )
}

export default SelectedItems;