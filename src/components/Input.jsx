import React, { useState } from 'react';
import styled from 'styled-components';

const Input = ({ description, isHover = false, isFocus = false, isError = false, isDisabled = false, helperText, value, size, isFullWidth = false, isMultiline, row }) => {
    const [inputValue, setInputValue] = useState(value);

    const applySize = () => {
        if (size === 'sm')
            return 'sm';
        else if (size === 'md')
            return 'md';
    };

    const checkHover = isHover ? 'hover' : '';
    const checkFocus = isFocus ? 'focus' : '';
    const checkError = isError ? 'error' : '';
    const checkSize = size ? applySize() : '';
    const checkFullWidth = isFullWidth ? 'full-width' : '';

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <StyledDescription className={`description ${checkHover} ${checkFocus}`}>{description}</StyledDescription>
            <StyledInputContainer className={`${checkFullWidth}`}>
                <label htmlFor="input-label" className={`${checkHover} ${checkFocus} ${checkError}`}>Label</label>
                <>
                    {!isMultiline ? 
                        <StyledInput
                            placeholder='Placeholder'
                            className={`${checkHover} ${checkFocus} ${checkError} ${checkSize} ${checkFullWidth}`}
                            disabled={isDisabled}
                            value={inputValue}
                            onChange={(e) => { setInputValue(e.target.value) }}
                        />
                        :
                        <StyledTextarea cols="15" rows={row} placeholder="Placeholder"></StyledTextarea>
                    }
                </>
                {helperText ? <p className={`helper-text ${checkError}`}>{helperText}</p> : null }
            </StyledInputContainer>
        </div>
    );
};

const StyledDescription = styled.p`
    font-size: 0.8em;
    color: #090F31;
    font-weight: 400;
    letter-spacing: 0.5px;
    margin-bottom: 15px;

    &.hover,
    &.focus{
        color: #828282;
    }
`;

const StyledInputContainer = styled.div`
    height: 100%;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    &.full-width{
        width: 100%;
    }
    
    label{
        font-size: 0.9em;
        margin-bottom: 5px;

        &.hover:hover{
            color: #333333;
        }

        &.focus{
            color: #2862FF;
        }

        &.error{
            color: #D32F2F;
        }
    }

    .helper-text{
        margin-top: 5px;
        font-size: 0.8em;
        color: #828282;
        font-weight: 300;

        &.error{
            color: #D32F2F;
        }
    }
`;

const StyledInput = styled.input`
    padding: 20px 10px;
    border: 1px solid #828282;
    color: #333333;
    border-radius: 10px;
    font-size: 1em;
    width: 100%;
    outline: none;

    &.hover:hover{
        border-color: #333333;
    }

    &.focus:focus{
        border-color: #2862FF;
    }

    &.error{
        border-color: #D32F2F;

        &.focus:focus{
            border-color: #D32F2F;
        }
    }

    &[disabled]{
        cursor: not-allowed;
    }

    &.sm{
        padding: 10px;
    }

    &.full-width{
        width: 100%;
    }
`;

const StyledTextarea = styled.textarea`
    padding: 20px 10px;
    border: 1px solid #828282;
    color: #333333;
    border-radius: 10px;
    font-size: 1em;
    outline: none;
`;

export default Input;