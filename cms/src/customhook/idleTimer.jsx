import React, {useRef} from 'react'
import IdleTimer from 'react-idle-timer'
import {useDispatch} from 'react-redux'

export default function Idle() {
    const idleTimerRef = useRef(null)
    const dispatch = useDispatch()
    const handleIdle = () => {
        dispatch({type: 'SET_LOGIN', val: false})
    }
    return (
        <IdleTimer ref={idleTimerRef} timeout={5 * 60 * 1000} onIdle={handleIdle}/>
    )
}