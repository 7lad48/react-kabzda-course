import React from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string;
    //collapsed: boolean;
}
export default function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('UncontrolledAccordion is rendering')
    const [collapsed, setCollapsed] = React.useState<boolean>(true);
    const bodyStateHandler = () => setCollapsed(!collapsed)
        return (
            <div>
                <UncontrolledAccordionTitle title={props.titleValue} bodyState={bodyStateHandler}/>
                {!collapsed && <UncontrolledAccordionBody/>}
            </div>
        );
}

type UncontrolledAccordionTitlePropsType = {
    title: string;
    bodyState: ()=>void
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    console.log('UncontrolledAccordionTitle is rendering')
    return (
        <h3 onClick={props.bodyState}>
            {props.title}
        </h3>
    );
}

function UncontrolledAccordionBody() {
    console.log('UncontrolledAccordionBody is rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}