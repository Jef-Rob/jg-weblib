import React from 'react'
import style from './bannerStyles.module.scss'
import bannerImg from '../../assets/kulinary.jpeg'

export default function Banner() {
    return (
        <img className={style.banner} src={bannerImg} alt='banner' />
    )
}