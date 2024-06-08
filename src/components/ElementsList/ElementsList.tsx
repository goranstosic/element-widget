import {DUMMY_DATA_ELEMENTS} from "../../dummyData";
import {useEffect, useState} from "react";
import {IElement} from "../../common/interfaces/elements.interface";
import SelectedPill from "../SelectedPill/SelectedPill";
import "./ElementsList.scss";

interface ElementListProps {
    onSelectedItemsChange: (selectedItems: IElement[]) => void;
    selectedItems: IElement[];
    toggleVisibility: () => void;
    searchQuery: string;
    selectedFilter: string;
}

const ElementsList: React.FC<ElementListProps> = ({selectedItems, onSelectedItemsChange, toggleVisibility, searchQuery, selectedFilter }) => {
    const [checkedElements, setCheckedElements] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const initialCheckedState = selectedItems.reduce((acc, item) => {
            acc[item.id] = true;
            return acc;
        }, {} as { [key: string]: boolean });
        setCheckedElements(initialCheckedState);
    }, [selectedItems]);

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
        <div className="elements-list">
            <div className="elements-list__inner">
                {filteredElements.length === 0 ? (
                    <p>No results found.</p>
                ) : (
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
                )}
            </div>
            <div>
                <p>Current Selected Items:</p>
                <div className="elements-list__selected-pills">
                    {currentSelectedItems.map(item => (
                        <SelectedPill key={item.id} item={item} handleRemoveSelectedItem={handleRemoveSelectedItem}/>
                    ))}
                </div>
            </div>
            <button className="elements-list__button save" onClick={handleSave}>Save</button>
            <button className="elements-list__button cancel" onClick={handleClose}>Close</button>
        </div>
    )
}

export default ElementsList;