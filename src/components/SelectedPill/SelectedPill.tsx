import React from "react";
import {IElement} from "../../common/interfaces/elements.interface";
import "./SelectedPill.scss";

interface SelectedPillProps {
    item:IElement;
    handleRemoveSelectedItem: (id: number) => void;
}

const SelectedPill: React.FC<SelectedPillProps> = ({item, handleRemoveSelectedItem}) => {

    return (
        <div className="selected-pill">
            <span>{item.name}</span>
            <button onClick={() => handleRemoveSelectedItem(item.id)}>x</button>
        </div>
    )

}

export default SelectedPill;