import React from 'react'
import { connect } from 'react-redux'
import style from './footerStyles.module.scss'
import Counter from '../../components/counter/counter'
import { resetProducts } from '../../redux/index'

const Footer = React.forwardRef((props, ref) => {

    function getTotalCount() {
        const array = props.state.products.map((product) => {
            return product.count
        })

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return array.reduce(reducer, 0)
    }

    function triggerResetProduct() {
        props.resetProducts();
        props.triggered();
    }

    const totalCount = getTotalCount();

    return (
        <footer
            ref={ref}
            className={`${style.Footer} ${totalCount > 0 ? style.Footer___show : style.Footer___hidden}`}>
            <button className={style.Footer_btn} onClick={() => triggerResetProduct()}>
                <h2>Supprimer le panier</h2>
                <div className={style.Footer_total}>
                    <p>TOTAL</p>
                    <Counter className={style.Footer_counter} count={totalCount} />
                </div>
            </button>
        </footer>
    )
})

const mapStateToProps = state => {
    return {
        state: state.reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetProducts: () => dispatch(resetProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)