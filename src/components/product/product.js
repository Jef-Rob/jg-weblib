import React from 'react'
import style from './productStyles.module.scss'

const Product = React.forwardRef((props, ref) => {
    return (
        <button
            className={style.Product}
            ref={ref}
        >
            <h2>{props.product.title}</h2>
            <p>{props.product.description}</p>
        </button>
    )
});

export default Product;