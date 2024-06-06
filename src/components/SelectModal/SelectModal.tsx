import ElementsList from "../ElementsList/ElementsList";
import ElementFilter from "../ElementFilter/ElementFilter";
import {SELECT_ITEMS} from "../../common/constants/widget.constants";
import "./SelectModal.scss";

interface SelectModalProps {
    onSelectedNamesChange: (selectedNames: string[]) => void;
    initialSelectedItems: number[];
}

const SelectModal: React.FC<SelectModalProps> =({initialSelectedItems, onSelectedNamesChange})=> {
    return (
        <div className="modal">
            <p>{SELECT_ITEMS}</p>
            <ElementFilter />
            <ElementsList initialSelectedItems={initialSelectedItems} onSelectedNamesChange={onSelectedNamesChange}/>
        </div>
    )
}

export default SelectModal;