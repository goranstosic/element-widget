import {IElement} from "../../common/interfaces/elements.interface";
import React from "react";

interface SelectedPillProps {
    item:IElement;
    handleRemoveSelectedItem: (id: number) => void;
}

const SelectedPill: React.FC<SelectedPillProps> = ({item, handleRemoveSelectedItem}) => {

    return (
        <div className="pill" key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveSelectedItem(item.id)}>x</button>
        </div>
    )

}

export default SelectedPill;