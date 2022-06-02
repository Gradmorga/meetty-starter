

import React from 'react';

import useRefedParams from "../../../../../react/Hooks/useRefedParams";


const useCombobox = (model, onValueChanged, defaultIndex = 0) => {

    const params = useRefedParams({ model, onValueChanged });

    const [comboboxState, setComboboxState] = React.useState({
        currentIndex: defaultIndex,
        isOpen:       false
    });

    React.useEffect(() => {
        const { model } = params.current;
        onValueChanged(model.itemAt(comboboxState.currentIndex).value);
    }, [comboboxState.currentIndex, params, onValueChanged]);

    const onClick = React.useCallback(
        () => setComboboxState(prevState => ({
            ...prevState,
            isOpen: !prevState.isOpen
        })),
        []
    );

    const onItemClicked = React.useCallback(selectedIndex => {
        setComboboxState(() => ({
            currentIndex: selectedIndex,
            isOpen:       false
        }))
    }, []);

    return {
        currentIndex: comboboxState.currentIndex,
        open:         comboboxState.isOpen,
        onItemClicked, onClick
    };
};


export default useCombobox;