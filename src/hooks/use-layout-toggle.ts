import { useState } from 'react';

const LAYOUT_FLEX = "flex"
const GRID ="grid"

type LayoutMode = "flex" | "grid";
const useLayoutToggle = () => {
    const [layoutMode, setLayoutMode] = useState<LayoutMode>(GRID);

    const toggleFlex = () => {
        setLayoutMode(LAYOUT_FLEX);
    };

    const toggleGrid = () => {
        setLayoutMode(GRID);
    };

    return {layoutMode, toggleFlex, toggleGrid};
};

export { useLayoutToggle };
