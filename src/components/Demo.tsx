import * as React from 'react';
import * as PropTypes from 'prop-types';
import {MyDecorator} from './Decorator';

export interface DemoProps {
    helloString?: string;
}

export default class DecoratorTest extends React.Component<DemoProps, any> {
    static propTypes = {
        helloString: PropTypes.string,
    };

    constructor(props: any) {
        super(props);
    }

    @MyDecorator()
    callDecorator() {
        console.log('I am in callDecorator');
    }

    componentDidMount() {
        setTimeout(() => {
            this.callDecorator();
            (this.callDecorator as any).cancel();

            this.callDecorator();
            (this.callDecorator as any).cancel();
        }, 0)
    }

    render() {
        return (
            <div>
                {this.props.helloString}
            </div>
        );
    }
}

