import React from "react";
import {IElement} from "../../common/interfaces/elements.interface";
import SelectedPill from "../SelectedPill/SelectedPill";
import "./SelectedItems.scss";

interface SelectedItemsProps  {
    selectedItems: IElement[];
    onRemoveSelectedItem: (id: number) => void;
}

const SelectedItems: React.FC<SelectedItemsProps> = ({selectedItems, onRemoveSelectedItem}) => {
    return (
        <>
            <div>You currently have {selectedItems.length} selected items</div>
            <div className="selected-items">
                {selectedItems.map(item => (
                    <SelectedPill key={item.id} item={item} handleRemoveSelectedItem={onRemoveSelectedItem} />
                ))}
            </div>
        </>
    )
}

export default SelectedItems;