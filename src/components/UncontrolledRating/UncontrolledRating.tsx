import React, {MouseEventHandler} from "react";

type RatingType = 0 | 1 | 2 | 3 | 4 | 5

export function UncontrolledRating() {
    const [value, setValue] = React.useState<RatingType>(0);
    console.log('UncontrolledRating is rendering')
    const StarsContainer = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginLeft: '15px',
        height: '20px',
    }
    //const starHandler = ()=>
        return  <div style={StarsContainer}>
                    <Star selected={value > 0} starHandler={() => setValue(1)}/>
                    <Star selected={value > 1} starHandler={() => setValue(2)}/>
                    <Star selected={value > 2} starHandler={() => setValue(3)}/>
                    <Star selected={value > 3} starHandler={() => setValue(4)}/>
                    <Star selected={value > 4} starHandler={() => setValue(5)}/>
                </div>

}

type StarPropsType = {
    selected: boolean
    starHandler: ()=>void
}
function Star(props: StarPropsType) {
    console.log('Star is rendering')
    const StarChecked = {
        fontSize: '33px',
        cursor: 'default',
        color: 'orange',
    }
    const Star = {
        fontSize: '33px',
        cursor: 'pointer',

    }
    if(props.selected === true){
        return <span style={StarChecked}>✩ </span>
    } else {
        return <span onClick={props.starHandler} style={Star}>✩ </span>
    }
    
}