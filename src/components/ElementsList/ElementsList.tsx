import {DUMMY_DATA_ELEMENTS} from "../../dummyData";
import {useState} from "react";
import "./ElementsList.scss";
import {IElement} from "../../common/interfaces/elements.interface";
import SelectedPill from "../SelectedPill/SelectedPill";

interface ElementListProps {
    onSelectedItemsChange: (selectedItems: IElement[]) => void;
    selectedItems: IElement[];
    toggleVisibility: () => void;
    onRemoveSelectedItem: (id: number) => void;
}

const ElementsList: React.FC<ElementListProps> = ({selectedItems, onSelectedItemsChange, toggleVisibility, onRemoveSelectedItem}) => {
    const [checkedElements, setCheckedElements] = useState<Record<number, boolean>>(() => {
        const initialChecked: Record<number, boolean> = {};
        selectedItems.forEach(item => {
            initialChecked[item.id] = true;
        });
        return initialChecked;
    });

    const selectedCount = Object.values(checkedElements).filter(Boolean).length;
    const currentSelectedItems = DUMMY_DATA_ELEMENTS.filter(element => checkedElements[element.id]);

    const handleCheckboxChange = (id: number) => {
        setCheckedElements(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    const handleSave = () => {
        const newSelectedItems = DUMMY_DATA_ELEMENTS.filter(element => checkedElements[element.id]);
        onSelectedItemsChange(newSelectedItems);
        toggleVisibility();
    };

    const handleClose = () => {
        toggleVisibility();
    }

    const handleRemoveSelectedItem = (id: number) => {
        setCheckedElements(prevState => ({
            ...prevState,
            [id]: false
        }));
    };

    return (
        <>
            <div className="elements-list">
                <ul>
                    {DUMMY_DATA_ELEMENTS.map(element => (
                        <li key={element.id}>
                            <input
                                type="checkbox"
                                id={`checkbox-${element.id}`}
                                checked={checkedElements[element.id] || false}
                                onChange={() => handleCheckboxChange(element.id)}
                                disabled={!checkedElements[element.id] && selectedCount >= 3}
                            />
                            <label htmlFor={`checkbox-${element.id}`}>{element.name}</label>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleClose}>Close</button>
            <div>
                <h2>Current Selected Items:</h2>
                {currentSelectedItems.map(item => (
                    <SelectedPill item={item} handleRemoveSelectedItem={handleRemoveSelectedItem} />
                ))}
            </div>
        </>
    )
}

export default ElementsList;