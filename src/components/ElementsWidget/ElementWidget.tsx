import SelectModal from "../SelectModal/SelectModal";
import SelectedItems from "../SelectedItems/SelectedItems";
import {CHANGE_MY_CHOICE, SELECT_ITEMS} from "../../common/constants/widget.constants";
import {useState} from "react";

const ElementWidget = () => {
    const [toggleModal, setToggleModal] = useState<boolean>(false);
    const [parentSelectedNames, setParentSelectedNames] = useState<string[]>([]);

    const initialSelectedItems = [1, 2]; // IDs of elements to be initially selected

    const handleSelectedNamesChange = (selectedNames: string[]) => {
        setParentSelectedNames(selectedNames);
    };

    const toggleVisibility = () => {
        setToggleModal(prevState => !prevState);
    }

    return (
        <div>
            <p>{SELECT_ITEMS}</p>
            {/*<SelectedItems />*/}
            <div>
                <h2>Selected Names in Parent Component:</h2>
                {parentSelectedNames.map(name => (
                    <div key={name}>{name}</div>
                ))}
            </div>
            <button onClick={toggleVisibility}>{CHANGE_MY_CHOICE}</button>
            {toggleModal &&
                <SelectModal onSelectedNamesChange={handleSelectedNamesChange} initialSelectedItems={initialSelectedItems}/>}
        </div>
    )
}

export default ElementWidget;

