import React from "react";

import { List } from "@material-ui/core";

import CategoryItem from "../CategoryItem";

type CategoryListProps = {
    categories: string[];
    handleToggle: (value: number) => void;
    checked: number[];
};

const CategoryList: React.FC<CategoryListProps> = ({
    categories,
    handleToggle,
    checked,
}: CategoryListProps) => {
    return (
        <List>
            {categories.map((value, index) => (
                <CategoryItem
                    index={index}
                    key={index}
                    value={value}
                    handleClick={handleToggle}
                    isChecked={checked.indexOf(index) !== -1}
                />
            ))}
        </List>
    );
};

export default CategoryList;
