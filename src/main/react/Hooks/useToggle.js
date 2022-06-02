

import React from 'react';


const useToggle =  (value = false) => {
    const [isToggled, setValue] = React.useState(value);

    const onToggle = React.useCallback(() => setValue(prevState => !prevState), []);

    return [isToggled, onToggle];
};


export default useToggle;