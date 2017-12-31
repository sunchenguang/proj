import * as React from 'react'
import Demo from './Demo'

export interface HelloProps {
    compiler: string,
    framework: string
}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <Demo helloString='1111111'/>
            </div>
        );
    }
}
