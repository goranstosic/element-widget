import SelectModal from "../SelectModal/SelectModal";
import SelectedItems from "../SelectedItems/SelectedItems";
import {CHANGE_MY_CHOICE, SELECT_ITEMS} from "../../common/constants/widget.constants";
import {useState} from "react";
import {IElement} from "../../common/interfaces/elements.interface";

const ElementWidget = () => {
    const [toggleModal, setToggleModal] = useState<boolean>(false);
    const [selectedItems, setSelectedItems] = useState<IElement[]>([{ id:1, name: 'Element 1'}, {id:2, name: 'Element 2'}]);

    const handleSelectedItemsChange = (selectedItems: IElement[]) => {
        setSelectedItems(selectedItems);
    };

    const handleRemoveSelectedItem = (id: number) => {
        setSelectedItems(prevItems =>
            prevItems.filter(item => item.id !== id)
        );
    };

    const toggleVisibility = () => {
        setToggleModal(prevState => !prevState);
    }

    return (
        <div>
            <p>{SELECT_ITEMS}</p>
            {!toggleModal && <SelectedItems selectedItems={selectedItems} onRemoveSelectedItem={handleRemoveSelectedItem} /> }
            <button onClick={toggleVisibility}>{CHANGE_MY_CHOICE}</button>
            {toggleModal &&
                <SelectModal toggleVisibility={toggleVisibility} selectedItems={selectedItems} onSelectedItemsChange={handleSelectedItemsChange}/> }
        </div>
    )
}

export default ElementWidget;

