import {useState} from "react";
import ElementsList from "../ElementsList/ElementsList";
import ElementFilter from "../ElementFilter/ElementFilter";
import {SELECT_ITEMS} from "../../common/constants/widget.constants";
import {IElement} from "../../common/interfaces/elements.interface";
import "./SelectModal.scss";

interface SelectModalProps {
    onSelectedItemsChange: (selectedItems: IElement[]) => void;
    selectedItems: IElement[];
    toggleVisibility: () => void;
}

const SelectModal: React.FC<SelectModalProps> =({selectedItems, onSelectedItemsChange, toggleVisibility })=> {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState("No filter");

    return (
        <div className="select-modal">
            <div className="select-modal__header">
                <p>{SELECT_ITEMS}</p>
                <button onClick={toggleVisibility} className="select-modal__header__close-button">x</button>
            </div>
            <ElementFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
            <ElementsList toggleVisibility={toggleVisibility} selectedItems={selectedItems}
                          onSelectedItemsChange={onSelectedItemsChange} searchQuery={searchQuery} selectedFilter={selectedFilter}/>
        </div>
    )
}

export default SelectModal;