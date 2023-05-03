import React from 'react';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating'; // we can rename component, for example {Rating as Stars (or any name)}
import './App.css';

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
            {/*article 2*/}
            {/*<Rating value={0} />*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
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

