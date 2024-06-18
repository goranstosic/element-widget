import {useEffect, useState} from "react";
import {IElement} from "../../common/interfaces/elements.interface";
import SelectedPill from "../SelectedPill/SelectedPill";
import {DUMMY_DATA_ELEMENTS} from "../../dummyData";
import {CLOSE, CURRENT_SELECTED_ITEMS, NO_RESULTS_FOUND, SAVE} from "../../common/constants/widget.constants";
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
    const [items, setItems] = useState(DUMMY_DATA_ELEMENTS)

    useEffect(() => {
        const initialCheckedState = selectedItems.reduce((acc, item) => {
            acc[item.id] = true;
            return acc;
        }, {} as { [key: string]: boolean });
        setCheckedElements(initialCheckedState);
    }, [selectedItems]);

    useEffect(()=> {
        const newFilteredItems = items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())).filter(item => {
            switch(selectedFilter) {
                case 'greaterThan10':
                    return item.id > 10;
                case 'greaterThan100':
                    return item.id > 100;
                case 'greaterThan200':
                    return item.id > 200;
                default: return true;
            }
        })
        setItems(newFilteredItems)
    }, [searchQuery, selectedFilter])

    const selectedCount = Object.values(checkedElements).filter(Boolean).length;
    const currentSelectedItems = items.filter(element => checkedElements[element.id]);

    const handleCheckboxChange = (id: number) => {
        setCheckedElements(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    const handleSave = () => {
        const newSelectedItems = items.filter(element => checkedElements[element.id]);
        onSelectedItemsChange(newSelectedItems);
        toggleVisibility();
    };

    const handleClose = () => toggleVisibility();

    const handleRemoveSelectedItem = (id: number) => {
        setCheckedElements(prevState => ({
            ...prevState,
            [id]: false
        }));
    };

    return (
        <div className="elements-list">
            <div className="elements-list__inner">
                {items.length === 0 ? (
                    <p>{NO_RESULTS_FOUND}</p>
                ) : (
                    <ul>
                        {items.map(element => (
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
                <p>{CURRENT_SELECTED_ITEMS}</p>
                <div className="elements-list__selected-pills">
                    {currentSelectedItems.map(item => (
                        <SelectedPill key={item.id} item={item} handleRemoveSelectedItem={handleRemoveSelectedItem}/>
                    ))}
                </div>
            </div>
            <button className="elements-list__button save" onClick={handleSave}>{SAVE}</button>
            <button className="elements-list__button cancel" onClick={handleClose}>{CLOSE}</button>
        </div>
    )
}

export default ElementsList;