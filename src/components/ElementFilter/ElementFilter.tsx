import React from "react";

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
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search elements"
            />
            <select value={selectedFilter} onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="greaterThan10">Number &gt; 10</option>
                <option value="greaterThan100">Number &gt; 100</option>
                <option value="greaterThan200">Number &gt; 200</option>
            </select>
        </div>
    )
}

export default ElementFilter;