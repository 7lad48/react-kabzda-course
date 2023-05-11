import React from 'react';
import styles from './OnOff.module.css'

// export type OnOffType = {
//     isOn: boolean
//     setIsOn: ()=>void
// }

function OnOff () {
    const [isOn, setIsOn] = React.useState<boolean>(true);
    console.log('onOff rendering')
    return (
        <div className={styles.wrapper}>
            <button onClick={() => !isOn && setIsOn(!isOn)} className={`${isOn ? `${styles.active} ${styles.btn}` : styles.btn}`}>On</button>
            <button onClick={() => isOn && setIsOn(!isOn)} className={`${!isOn ? `${styles.inactive} ${styles.btn}` : styles.btn}`}>Off</button>
            <span className={`${styles.indicator} ${isOn ? styles.active : styles.inactive}`}></span>
        </div>
    );
}

export default OnOff;