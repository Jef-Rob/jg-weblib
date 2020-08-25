import React from 'react'
import { connect } from 'react-redux'
import Hammer from 'hammerjs';

import style from './swiperStyles.module.scss'
import Product from '../../components/product/product'
import DeleteBtn from '../../components/deleteBtn/deleteBtn'
import { addProduct } from '../../redux/index'

class Swiper extends React.Component {
    swiperRef = React.createRef();
    deleteBtnRef = React.createRef();
    productRef = React.createRef();

    componentDidMount() {
        this.setDefaultScrollPosition();
        this.setSwiperTouchBehaviour();
        this.setDeleteBtnTouchBehaviour();
        this.setProductTouchBehaviour();
    }

    setSwiperTouchBehaviour() {
        const hammertime = new Hammer(this.swiperRef.current);
        hammertime.on('panleft panright', (e) => {
            this.swiperRef.current.scroll({ left: -e.deltaX, behavior: 'smooth' });
        });
    }

    setDeleteBtnTouchBehaviour() {
        const hammertime = new Hammer(this.deleteBtnRef.current);
        hammertime.on('tap', () => {
            this.scrollToProduct();
            this.props.addProduct(0, this.props.product.id);
        })
    }

    setProductTouchBehaviour() {
        const hammertime = new Hammer(this.productRef.current);
        hammertime.on('tap', () => {
            this.scrollToProduct();
            this.props.addProduct(this.props.product.count + 1, this.props.product.id);
        })
    }

    setDefaultScrollPosition() {
        this.swiperRef.current.scroll({ left: this.swiperRef.current.offsetWidth });
    }

    scrollToProduct() {
        this.productRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }

    render() {
        return (
            <div ref={this.swiperRef} className={`${style.Swiper} ${this.props.swiper}`}>
                <DeleteBtn
                    ref={this.deleteBtnRef}
                />
                <Product
                    product={this.props.product}
                    ref={this.productRef}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.reducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (count, id) => dispatch(addProduct(count, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Swiper)