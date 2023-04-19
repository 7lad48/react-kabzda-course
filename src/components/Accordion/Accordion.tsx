import React from 'react';

export default function Accordion(props: any) {
    console.log('Accordion is rendering')
    return (
        <div>
            <AccordionTitle value={props.value}/>
            <AccordionBody/>
        </div>

    );
}

function AccordionTitle(props: any) {
    console.log('AccordionTitle is rendering')
    return (
        <h3>
            {props.value}
        </h3>
    );
}

function AccordionBody() {
    console.log('AccordionBody is rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}