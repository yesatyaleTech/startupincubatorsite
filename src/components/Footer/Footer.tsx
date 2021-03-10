import { render } from '@testing-library/react';
import React from 'react';


export default class Footer extends React.Component<{}>{
    constructor(props:any){
        super(props);
    }

    render(){
        return (
            <div>
                <p>Yale Entrepreneurial Society</p>
            </div>
        );
    }
}