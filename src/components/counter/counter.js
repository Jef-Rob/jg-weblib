import React from 'react'

export default function Counter(props) {
    return (
        <div className={props.className}>
            {props.count > 0 && <p>x{props.count}</p>
            }</div>
    )
}