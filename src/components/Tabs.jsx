export default function Tabs({ children, buttons, ButtonContainer = 'menu' }) {
    // let ButtonContainer = buttonContainer
    return <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>
}