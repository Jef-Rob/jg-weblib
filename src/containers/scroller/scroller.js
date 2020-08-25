import React from 'react'
import { connect } from 'react-redux'

import { fetchProducts } from '../../redux/index'
import Swiper from '../swiper/swiper'
import Counter from '../../components/counter/counter'
import style from './scrollerStyles.module.scss'

class Scroller extends React.Component {
    scrollerRef = React.createRef();
    scrollPositionInterval;

    constructor(props) {
        super(props);
        this.state = {
            chunkLength: 10,
            start: 0
        }
    }

    componentDidMount() {
        this.getChunk();
        this.checkScrollPosition();
    }

    checkScrollPosition() {
        return this.scrollPositionInterval = setInterval(() => {
            if (window.innerHeight + document.documentElement.scrollTop
                > document.documentElement.offsetHeight - 50) {
                if (this.isPageFullyLoaded()) {
                    clearInterval(this.scrollPositionInterval)
                } else {
                    this.getChunk();
                }
            }
        }, 500)
    }

    isPageFullyLoaded() {
        const maxPageLength = 100;
        return this.state.start + this.state.chunkLength > maxPageLength
    }

    getChunk() {
        this.props.fetchProducts(this.state.start, this.state.chunkLength)
        this.setState((state) => {
            return {
                start: state.start + state.chunkLength,
                limit: state.chunkLength
            }
        });
    }

    componentWillUnmount() {
        clearInterval(this.scrollPositionInterval)
    }

    render() {
        const productList = this.props.state.products.map((product) =>
            <li className={style.Scroller_list} key={product.id}>
                <Counter className={style.Scroller_counter} count={product.count} />
                <Swiper className={style.Scroller_swiper} product={product} />
            </li>
        );

        return (
            <div ref={this.scrollerRef} className={style.Scroller}>
                <ul>
                    {productList}
                </ul>
                {this.props.state.loading && <p>loading...</p>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state: state.reducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (start, limit) => dispatch(fetchProducts(start, limit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scroller)