import React from 'react';

import './App.css';

export default function App() {
    console.log('App is rendering')
    return (
        <div className="App">
            <Title/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function Title() {
    console.log('Title is rendering')
    return (
        <>
            Title: Hello
        </>
    );
}

function Rating() {
    console.log('Rating is rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    console.log('Star is rendering')
    return (
        <div>star</div>
    );
}

function Accordion() {
    console.log('Accordion is rendering')
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>

    );
}

function AccordionTitle() {
    console.log('AccordionTitle is rendering')
    return (
        <div>
            Accordion
        </div>
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