import React from "react";

import { Checkbox, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

type CategoryItemProps = {
    index: number;
    value: string;
    isChecked: boolean;
    handleClick: (value: number) => void;
};

const CategoryItem: React.FC<CategoryItemProps> = ({
    index,
    value,
    handleClick,
    isChecked,
}: CategoryItemProps) => {
    return (
        <ListItem
            key={value}
            role={undefined}
            dense
            button
            onClick={() => {
                handleClick(index);
            }}
        >
            <ListItemIcon>
                <Checkbox edge="start" checked={isChecked} tabIndex={-1} color="primary" />
            </ListItemIcon>
            <ListItemText id={value} primary={`${value}`} />
        </ListItem>
    );
};

export default CategoryItem;
