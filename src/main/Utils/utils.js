


const throttle = (fn, timeout) => {

    let isTimePassed = true;

    return function () {
        if (isTimePassed) {
            fn.apply(null, arguments);
            isTimePassed = false;
            setTimeout(() => isTimePassed = true, timeout);
        }
    };
};


export {
    throttle
};