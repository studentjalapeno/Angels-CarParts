import React from 'react';
import {Grid} from '@material-ui/core';

import Product from "./Product/Product";
import useStyles from './styles';

const products = [
    { id: 1, name: 'Engine', description: 'Honda Engine', price: "$1", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-chevrolet-corvette-lt2-engine-001-1582310258.jpg"},
    { id: 1, name: 'Spark Plugs', description: 'Bosch lridium', price: "$2", image: "https://m.media-amazon.com/images/I/71999q76ALL._AC_SL1500_.jpg"},
];


const Products = () => {
    const classes = useStyles();
    return(
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) =>  (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    );

};

export default Products;