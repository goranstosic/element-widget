import ElementsList from "../ElementsList/ElementsList";
import ElementFilter from "../ElementFilter/ElementFilter";
import {SELECT_ITEMS} from "../../common/constants/widget.constants";
import "./SelectModal.scss";
import {IElement} from "../../common/interfaces/elements.interface";

interface SelectModalProps {
    onSelectedItemsChange: (selectedItems: IElement[]) => void;
    selectedItems: IElement[];
    toggleVisibility: () => void;
}

const SelectModal: React.FC<SelectModalProps> =({selectedItems, onSelectedItemsChange, toggleVisibility })=> {
    return (
        <div className="modal">
            <p>{SELECT_ITEMS}</p>
            <ElementFilter />
            <ElementsList toggleVisibility={toggleVisibility} selectedItems={selectedItems} onSelectedItemsChange={onSelectedItemsChange}/>
        </div>
    )
}

export default SelectModal;