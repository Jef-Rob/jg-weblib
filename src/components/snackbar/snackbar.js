import React from 'react'
import style from './snackbarStyles.module.scss'

export default function Snackbar(props) {
    return (
        <div className={`${style.Snackbar} ${props.isVisible ? style.Snackbar___show : style.Snackbar___hidden}`}>
            <div>Panier supprimé</div>
        </div>
    )
}