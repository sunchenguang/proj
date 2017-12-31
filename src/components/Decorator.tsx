export default function decoratorTest(fn: any) {
    console.log('in definingProperty');
    const throttled = () => {
        fn();
    };

    (throttled as any).cancel = () => console.log('cancel');

    return throttled;
}

export function MyDecorator() {
    return function(target: any, key: any, descriptor: any) {
        let fn = descriptor.value;
        let definingProperty = false;
        console.log('before definingProperty');
        return {
            configurable: true,
            // get: function()这样的写法也是可以执行
            get() {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                let boundFn = decoratorTest(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true,
                });
                definingProperty = false;
                return boundFn;
            },
        };
    };
}
