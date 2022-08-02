import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { StyledContainer } from '../assets/StyledContainer';

const Buttons = () => {
    return (
        <StyledContainer>
            <h2>Buttons</h2>
            <div className='buttons'>
                <StyledButtonsGroup className='two-buttons'>
                    <Button
                        labelText="<Button />"
                        buttonText="Default"
                    />
                    <Button
                        labelText="&amp;:hover, &amp;:focus"
                        buttonText="Default"
                        isHoverAndFocus={true}
                    />
                </StyledButtonsGroup>
                <StyledButtonsGroup className='two-buttons'>
                    <Button
                        labelText='<Button variant="outline" />'
                        buttonText="Default"
                        variant="outline"
                    />
                    <Button
                        labelText="&amp;:hover, &amp;:focus"
                        buttonText="Default"
                        isHoverAndFocus={true}
                        variant="outline"
                    />
                </StyledButtonsGroup>
                <StyledButtonsGroup className='two-buttons'>
                    <Button
                        labelText='<Button variant="text" />'
                        buttonText="Default"
                        variant="text"
                    />
                    <Button
                        labelText="&amp;:hover, &amp;:focus"
                        buttonText="Default"
                        isHoverAndFocus={true}
                        variant="text"
                    />
                </StyledButtonsGroup>
                <StyledButtonsGroup className='one-button'>
                    <Button
                        labelText='<Button disableShadow />'
                        buttonText="Primary"
                        color="primary"
                        isDisableShadow={true}
                    />
                </StyledButtonsGroup>
                <StyledButtonsGroup className='two-buttons'>
                    <Button
                        labelText='<Button disabled />'
                        buttonText="Disabled"
                        isDisableShadow={true}
                        isDisabled={true}
                    />
                    <Button
                        labelText='<Button variant="text" disabled />'
                        buttonText="Disabled"
                        variant="text"
                        isDisableShadow={true}
                        isDisabled={true}
                    />
                </StyledButtonsGroup>
                <StyledButtonsGroup className='two-buttons'>
                    <Button
                        labelText='<Button startIcon="local_grocery_store" />'
                        buttonText="Primary"
                        color="primary"
                        iconClassName="material-icons"
                        iconName="local_grocery_store"
                        isIconAtStart={true}
                    />
                    <Button
                        labelText='<Button endIcon="local_grocery_store" />'
                        buttonText="Primary"
                        color="primary"
                        iconClassName="material-icons"
                        iconName="local_grocery_store"
                    />
                </StyledButtonsGroup>
                <StyledButtonsGroup className='three-buttons'>
                    <Button
                        labelText='<Button size="sm" />'
                        buttonText="Primary"
                        color="primary"
                        size="sm"
                    />
                    <Button
                        labelText='<Button size="md" />'
                        buttonText="Primary"
                        color="primary"
                        size="md"
                    />
                    <Button
                        labelText='<Button size="lg" />'
                        buttonText="Primary"
                        color="primary"
                        size="lg"
                    />
                </StyledButtonsGroup>
                <StyledButtonsGroup className='four-buttons'>
                    <Button
                        labelText='<Button color="default" />'
                        buttonText="Default"
                        color="default"
                    />
                    <Button
                        labelText='<Button color="primary" />'
                        buttonText="Primary"
                        color="primary"
                    />
                    <Button
                        labelText='<Button color="secondary" />'
                        buttonText="Secondary"
                        color="secondary"
                    />
                    <Button
                        labelText='<Button color="danger" />'
                        buttonText="Danger"
                        color="danger"
                    />
                </StyledButtonsGroup>
                <StyledButtonsGroup className='four-buttons'>
                    <Button
                        labelText='&amp;:hover, &amp;:focus'
                        buttonText="Default"
                        color="default"
                        isHoverAndFocus={true}
                    />
                    <Button
                        buttonText="Primary"
                        color="primary"
                        isHoverAndFocus={true}
                    />
                    <Button
                        buttonText="Secondary"
                        color="secondary"
                        isHoverAndFocus={true}
                    />
                    <Button
                        buttonText="Danger"
                        color="danger"
                        isHoverAndFocus={true}
                    />
                </StyledButtonsGroup>
            </div>
        </StyledContainer>
    );
};

const StyledButtonsGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    &.one-button{
        width: 25%;
    }

    &.two-buttons{
        width: 60%;
    }

    &.three-buttons{
        width: 60%;
    }

    &.four-buttons{
        width: 100%;
    }
`;

export default Buttons;