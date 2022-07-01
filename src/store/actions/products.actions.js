import { productsTypes } from "../types/products.types";

const {SELECT_PRODUCT, FILTER_PRODUCTS} = productsTypes

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productId: id
})

export const filteredProducts = (id) => ({
    type: FILTER_PRODUCTS,
    categoryId:id
})