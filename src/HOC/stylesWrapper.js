import React from 'react';
import commonStyles from './../styles/commonStyles';


const translateProps = (props) => {
    let _styles = {...commonStyles.default};

    if (props.disable) {
        _styles = { ..._styles, ...commonStyles.disable};
    }

    let newPros = {...props, styles:_styles};

    return newPros;
}

export default (WrapperComponent) => {
    return function wrappedRender(args) {
        return WrapperComponent(translateProps(args));

    }

}