import React from "react";
import styled from "styled-components";
import { productsData } from "./data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
`;

const Header = styled.h1`
    padding: 20px;
`;

const Products: React.FC<{}> = () => {
    return (
        <>
            <Header>Produtos em destaque</Header>
            <Container>
                {productsData.map((item) => {
                    return <Product item={item} />;
                })}
            </Container>
        </>
    );
};

export default Products;