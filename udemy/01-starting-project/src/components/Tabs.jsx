import { Children } from "react";

export default function Tabs({children, buttons, ButtonContainer = 'menu'}){
    return <>
    <ButtonContainer>{buttons}</ButtonContainer>
    {children}
    </>
}