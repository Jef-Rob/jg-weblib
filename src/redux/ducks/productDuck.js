import axios from "axios"

const FETCH_PRODUCTS_REQUEST = 'jg-weblib/productDuck/fetch_products_request'
const FETCH_PRODUCTS_SUCCESS = 'jg-weblib/productDuck/fetch_products_success'
const FETCH_PRODUCTS_FAILURE = 'jg-weblib/productDuck/fetch_products_failure'
const ADD_PRODUCT = 'jg-weblib/productDuck/add_product'
const RESET_PRODUCTS = 'jg-weblib/productDuck/reset_products'

const initialState = {
    loading: true,
    products: [],
    error: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, ...action.payload],
                error: ''
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.payload.id) {
                        product.count = action.payload.count;
                    }
                    return product
                })
            }
        case RESET_PRODUCTS:
            return {
                ...state,
                products: state.products.map((product) => {
                    product.count = 0;
                    return product
                })
            }
        default:
            return state;
    }
};

const fetchProductsRequest = () => {
    return { type: FETCH_PRODUCTS_REQUEST };
};

const fetchProductsSuccess = products => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    };
};

const fetchProductsFailure = error => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    };
};

export const fetchProducts = (start, limit) => {
    return function (dispatch) {
        dispatch(fetchProductsRequest());
        axios.get(`http://jsonplaceholder.typicode.com/albums?_start=${start}&_limit=${limit}`)
            .then(response => {
                const products = response.data.map(data => {
                    return {
                        id: data.id,
                        title: data.title.split(' ')[0],
                        description: data.title,
                        count: 0
                    }
                })
                dispatch(fetchProductsSuccess(products));
            })
            .catch(error => {
                dispatch(fetchProductsFailure(error.message));
            })
    }
};

export const addProduct = (count, id) => {
    return {
        type: ADD_PRODUCT,
        payload: { count, id }
    }
}

export const resetProducts = () => {
    return {
        type: RESET_PRODUCTS
    }
}