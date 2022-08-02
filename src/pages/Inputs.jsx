import React from 'react';
import styled from 'styled-components';
import { StyledContainer } from '../assets/StyledContainer';
import Input from '../components/Input';

const Inputs = () => {
    return (
        <StyledContainer>
            <h2>Inputs</h2>
            <div className="inputs" style={{ minHeight: "70vh" }}>
                <StyledInputGroup className='three-inputs'>
                    <Input
                        description='<Input />'
                    />
                    <Input
                        description='&amp;:hover'
                        isHover={true}
                    />
                    <Input
                        description='&amp;:focus'
                        isFocus={true}
                    />
                </StyledInputGroup>
                <StyledInputGroup className='three-inputs'>
                    <Input
                        description='<Input error />'
                        isError={true}
                    />
                    <Input
                        description='&amp;:hover'
                        isError={true}
                        isHover={true}
                    />
                    <Input
                        description='&amp;:focus'
                        isError={true}
                        isFocus={true}
                    />
                </StyledInputGroup>
                <StyledInputGroup>
                    <Input
                        description='<Input disabled />'
                        isDisabled={true}
                    />
                </StyledInputGroup>
                <StyledInputGroup className='two-inputs'>
                    <Input
                        description='<Input helperText="Some interesting text" />'
                        helperText="Some interesting text"
                    />
                    <Input
                        description='<Input helperText="Some interesting text" />'
                        helperText="Some interesting text"
                        isError={true}
                    />
                </StyledInputGroup>
                <StyledInputGroup>
                    <Input
                        description='<Input value="text" />'
                        value='Text'
                    />
                </StyledInputGroup>
                <StyledInputGroup className='two-inputs'>
                    <Input
                        description='<Input size="sm" />'
                        size="sm"
                    />
                    <Input
                        description='<Input size="md" />'
                        size="md"
                    />
                </StyledInputGroup>
                <StyledInputGroup className='one-input'>
                    <Input
                        description='<Input fullWidth />'
                        isFullWidth={true}
                        value='Text'
                    />
                </StyledInputGroup>
                <StyledInputGroup className='one-input multiline'>
                    <Input
                        description='<Input multiline row="4" />'
                        isMultiline={true}
                        row="4"
                    />
                </StyledInputGroup>
            </div>
        </StyledContainer>
    );
};

const StyledInputGroup = styled.div`
    display: flex;
    justify-content: space-between;
    height: 120px;
    margin-bottom: 50px;

    &.one-input{
        width: 100%;
    }

    &.two-inputs{
        height: 140px;
        width: 70%;
    }

    &.three-inputs{
        width: 80%;
    }

    &.multiline{
        height: max-content;
    }
`;

export default Inputs;