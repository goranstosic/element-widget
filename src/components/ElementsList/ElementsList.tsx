import {DUMMY_DATA_ELEMENTS} from "../../dummyData";
import {useState} from "react";
import "./ElementsList.scss";
import {IElement} from "../../common/interfaces/elements.interface";
import SelectedPill from "../SelectedPill/SelectedPill";

interface ElementListProps {
    onSelectedItemsChange: (selectedItems: IElement[]) => void;
    selectedItems: IElement[];
    toggleVisibility: () => void;
    searchQuery: string;
    selectedFilter: string;
}

const ElementsList: React.FC<ElementListProps> = ({selectedItems, onSelectedItemsChange, toggleVisibility, searchQuery, selectedFilter }) => {
    const [checkedElements, setCheckedElements] = useState<Record<number, boolean>>(() => {
        const initialChecked: Record<number, boolean> = {};
        selectedItems.forEach(item => {
            initialChecked[item.id] = true;
        });
        return initialChecked;
    });
    const filteredElements = DUMMY_DATA_ELEMENTS.filter(element => {
        const lowercaseName = element.name.toLowerCase();
        if (selectedFilter === 'greaterThan10') {
            return /\d{2}/.test(lowercaseName) && parseInt(lowercaseName.match(/\d{2}/)![0]) > 10;
        } else if (selectedFilter === 'greaterThan100') {
            return /\d{3}/.test(lowercaseName) && parseInt(lowercaseName.match(/\d{3}/)![0]) > 100;
        } else if (selectedFilter === 'greaterThan200') {
            return /\d{3}/.test(lowercaseName) && parseInt(lowercaseName.match(/\d{3}/)![0]) > 200;
        }
        return true; // Default: no filter applied
    }).filter(element =>
        element.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                    {filteredElements.map(element => (
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
                    <SelectedPill key={item.id} item={item} handleRemoveSelectedItem={handleRemoveSelectedItem} />
                ))}
            </div>
        </>
    )
}

export default ElementsList;