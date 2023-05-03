import React from 'react';
import styles from './OnOff.module.css'

export type OnOffType = {
    isOn: boolean
    setIsOn: (state:boolean)=>void
}

function OnOff (props: OnOffType) {
    return (
        <div className={styles.wrapper}>
            <button onClick={() => props.setIsOn(true)} className={`${styles.btn} ${props.isOn && styles.active}`}>On</button>
            <button onClick={() => props.setIsOn(false)} className={`${styles.btn} ${!props.isOn && styles.inactive}`}>Off</button>
            <span className={`${styles.indicator} ${props.isOn ? styles.active : styles.inactive}`}></span>
        </div>
    );
}

export default OnOff;