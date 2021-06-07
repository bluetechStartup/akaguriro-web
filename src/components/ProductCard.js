import React from 'react'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next';

function ProductCard({product}) {
    const {t}=useTranslation()
    return (
        <Link to={`/product/${product._id}`} className="card">
            <div className="content">
                <h3>{t(`${product.productName}`)}</h3>
                <img src={product.images[0]} alt=''/>
                <p>{t(`${product.description}`)}</p>
            </div>
        </Link>
    )
}

export default ProductCard
