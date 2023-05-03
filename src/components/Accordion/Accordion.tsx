import React from 'react';

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
}
export default function Accordion(props: AccordionPropsType) {
    console.log('Accordion is rendering')
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        );
}

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle is rendering')
    return (
        <h3>
            {props.title}
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