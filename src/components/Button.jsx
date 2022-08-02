import React from 'react';
import styled from 'styled-components';

const Button = ({ labelText, buttonText, isHoverAndFocus = false, variant, isDisableShadow = false, isDisabled = false, iconClassName, iconName, isIconAtStart = false, size, color }) => {

    const applyVariant = () => {
        if (variant === 'outline')
            return 'outline';
        else if (variant === 'text')
            return 'text';
    };

    const applySize = () => {
        if (size === 'sm')
            return 'sm';
        else if (size === 'md')
            return 'md';
        else if (size === 'lg')
            return 'lg';
    }

    const applyColor = () => {
        if (color === 'default')
            return 'default';
        else if (color === 'primary')
            return 'primary';
        else if (color === 'secondary')
            return 'secondary';
        else if (color === 'danger')
            return 'danger';
    }

    const checkVariant = variant ? applyVariant() : '';
    const checkHoverAndFocus = isHoverAndFocus ? 'hover focus' : '';
    const checkShadow = isDisableShadow ? 'disable-shadow' : '';
    const checkDisabled = isDisabled ? 'disabled' : '';
    const checkSize = size ? applySize() : '';
    const checkColor = color ? applyColor() : '';

    return (
        <StyledButtonDetails>
            <label htmlFor="button-type" className={`${checkHoverAndFocus}`}>{labelText}</label>
            <StyledButton className={`${checkVariant} ${checkHoverAndFocus} ${checkShadow} ${checkDisabled} ${checkSize} ${checkColor}`} disabled={isDisabled}>
                {iconClassName && isIconAtStart ? <span className={iconClassName}>{iconName}</span> : null}
                {buttonText}
                {iconClassName && !isIconAtStart ? <span className={iconClassName}>{iconName}</span> : null}
            </StyledButton>
        </StyledButtonDetails>
    );
};

const StyledButtonDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 4.5em;

    label{
        font-size: 0.8em;
        color: #090F31;
        font-weight: 400;
        letter-spacing: 0.5px;

        &.hover,
        &.focus{
            color: #828282;
        }
    }
`;

const StyledButton = styled.button`
    padding: 12px 20px;
    font-size: 1.2em;
    color: #090F31;
    border: none;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    cursor: pointer;
    outline: none;
    width: max-content;

    span{
        display: inline-block;
        margin: 0px 5px;
        vertical-align: middle;
    }
    
    &.primary{
        background-color: #3D5AFE;
        color: #fff;

        &.hover:hover,
        &.focus:focus{
            background-color: #0039CB;
        }
    }

    &.secondary{
        background-color: #1D303A;
        color: #fff;

        &.hover:hover,
        &.focus:focus{
            background-color: #1C313A;
        }
    }

    &.danger{
        background-color: #D32F2F;
        color: #fff;

        &.hover:hover,
        &.focus:focus{
            background-color: #9A0107;
        }
    }

    &.hover:hover,
    &.focus:focus{
        background-color: #AEAEAE;
    }

    &.outline{
        border: 1px solid #3D5AFE;
        color: #3D5AFE;
        background: transparent;

        &.hover:hover,
        &.focus:focus{
            background-color: #EAEFFF;
        }
    }

    &.text{
        border: none;
        color: #3D5AFE;
        background: none;
        box-shadow: none;

        &.hover:hover,
        &.focus:focus{
            border: none;
            background-color: #EAEFFF;
        }
    }

    &.disable-shadow{
        box-shadow: none;
    }

    &.disabled{
        background-color: #E0E0E0;
        color: #9E9E9E;
        cursor: not-allowed;

        &.text{
            background: none;
        }
    }

    &.sm{
        padding: 10px 15px;
    }

    &.md{
        padding: 10px 20px;
    }

    &.lg{
        padding: 15px 30px;
    }
`;

export default Button;