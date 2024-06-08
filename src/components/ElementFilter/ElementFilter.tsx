import React from "react";
import "./ElementFilter.scss";
import {
    FILTER,
    GREATER_THAN_10,
    GREATER_THAN_100,
    GREATER_THAN_200,
    NO_FILTER,
    SEARCH
} from "../../common/constants/widget.constants";

interface ElementFilterProps {
    searchQuery: string;
    selectedFilter: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
    setSelectedFilter: React.Dispatch<React.SetStateAction<string>>
}

const ElementFilter: React.FC<ElementFilterProps> = ({searchQuery, setSearchQuery, selectedFilter, setSelectedFilter}) => {

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFilter(event.target.value);
    };

    return (
        <div className="element-filter">
            <div>
                <span>{SEARCH}</span>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder=""
                />
            </div>
            <div>
                <span>{FILTER}</span>
                <select value={selectedFilter} onChange={handleFilterChange}>
                    <option value="all">{NO_FILTER}</option>
                    <option value="greaterThan10">{GREATER_THAN_10}</option>
                    <option value="greaterThan100">{GREATER_THAN_100}</option>
                    <option value="greaterThan200">{GREATER_THAN_200}</option>
                </select>
            </div>
        </div>
    )
}

export default ElementFilter;