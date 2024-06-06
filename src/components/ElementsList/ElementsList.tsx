import {DUMMY_DATA_ELEMENTS} from "../../dummyData";
import {useState} from "react";
import "./ElementsList.scss";

interface ElementListProps {
    onSelectedNamesChange: (selectedNames: string[]) => void;
    initialSelectedItems: number[];
}

const ElementsList: React.FC<ElementListProps> = ({initialSelectedItems, onSelectedNamesChange}) => {
    const [checkedElements, setCheckedElements] = useState<Record<number, boolean>>(() => {
        const initialChecked: Record<number, boolean> = {};
        initialSelectedItems.forEach(id => {
            initialChecked[id] = true;
        });
        return initialChecked;
    });

    const handleCheckboxChange = (id: number) => {
        setCheckedElements(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));

        console.log(checkedElements);
    }

    const handleSave = () => {
        const selectedItems = DUMMY_DATA_ELEMENTS.filter(element => checkedElements[element.id]);
        onSelectedNamesChange(selectedItems.map(item => item.name));
        console.log("Selected items:", selectedItems);
        // You can call an API, update state, or perform any other action to save the selected items
    };

    const selectedItems = DUMMY_DATA_ELEMENTS.filter(element => checkedElements[element.id]);

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
                            />
                            <label htmlFor={`checkbox-${element.id}`}>{element.name}</label>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={handleSave}>Save</button>
            <div>
                <h2>Current Selected Items:</h2>
                {selectedItems.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </>
    )
}

export default ElementsList;