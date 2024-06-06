import ElementsList from "../ElementsList/ElementsList";
import ElementFilter from "../ElementFilter/ElementFilter";
import {SELECT_ITEMS} from "../../common/constants/widget.constants";
import "./SelectModal.scss";
import {IElement} from "../../common/interfaces/elements.interface";
import {useState} from "react";

interface SelectModalProps {
    onSelectedItemsChange: (selectedItems: IElement[]) => void;
    selectedItems: IElement[];
    toggleVisibility: () => void;
}

const SelectModal: React.FC<SelectModalProps> =({selectedItems, onSelectedItemsChange, toggleVisibility })=> {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');

    return (
        <div className="modal">
            <p>{SELECT_ITEMS}</p>
            <ElementFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
            <ElementsList toggleVisibility={toggleVisibility} selectedItems={selectedItems}
                          onSelectedItemsChange={onSelectedItemsChange} searchQuery={searchQuery} selectedFilter={selectedFilter}/>
        </div>
    )
}

export default SelectModal;