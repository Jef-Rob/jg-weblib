import React from 'react'
import style from './deleteBtnStyles.module.scss'
import trashIcon from '../../assets/trash.svg'

const DeleteBtn = React.forwardRef((props, ref) => {
    return (
        <button
            className={style.DeleteBtn}
            ref={ref}
        >
            <img src={trashIcon} alt='trash icon' />
        </button>
    )
});

export default DeleteBtn;