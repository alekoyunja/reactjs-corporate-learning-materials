import React from "react";

type TitleProps = {
    title: string;
};

const Title = ({ title }: TitleProps) => <h2>{title}</h2>;

export default Title;