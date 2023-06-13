import React from 'react';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating'; // we can rename component, for example {Rating as Stars (or any name)}
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


export default function App() {
    console.log('App is rendering')

    return (
        <div className="App">
            {/*<Title title="This is app component"/>*/}
            {/*<Title title="my asdjasd"/>*/}
            {/*Article 1*/}
            {/*<Rating value={3} />*/}
            <Accordion titleValue="Title num one" collapsed={false} />
            <Accordion titleValue="Title number Two" collapsed={false} />
            <OnOff />
            <UncontrolledAccordion titleValue={'Test useState'}/>
            <UncontrolledAccordion titleValue={'Test useState2'}/>
            <UncontrolledAccordion titleValue={'Test useState3'}/>
            <UncontrolledRating />
            <UncontrolledRating />
        </div>
    );
}
// type TitlePropsType = {
//     title: string
// }
// function Title(props: TitlePropsType) {
//     console.log('Title is renderinsg')
//     return (
//         <h2>
//             {props.title}
//         </h2>
//     );
//}

