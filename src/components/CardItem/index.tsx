import React from "react";

import { Card, CardActions, CardContent, CardHeader } from "@material-ui/core";

type CardItemProps = {
    title: string;
    content: React.ReactNode;
    actions: React.ReactNode;
    children?: React.ReactNode;
};
const CardItem: React.FC<CardItemProps> = ({ title, content, actions, ...rest }: CardItemProps) => {
    return (
        <Card {...rest}>
            <CardHeader title={title} />
            <CardContent>{content}</CardContent>
            <CardActions disableSpacing>{actions}</CardActions>
        </Card>
    );
};

export default CardItem;
