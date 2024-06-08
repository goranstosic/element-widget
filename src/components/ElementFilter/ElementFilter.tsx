import React from "react";
import "./ElementFilter.scss";
import {FILTER, SEARCH} from "../../common/constants/widget.constants";

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
                    <option value="all">No filter</option>
                    <option value="greaterThan10">Number &gt; 10</option>
                    <option value="greaterThan100">Number &gt; 100</option>
                    <option value="greaterThan200">Number &gt; 200</option>
                </select>
            </div>
        </div>
    )
}

export default ElementFilter;