import React from 'react'
import { Image, LogoContainer } from './index.style'
const Logo: React.FC<any> = ({src}) => {
    return (
        <LogoContainer>
            <Image src={src}></Image>
        </LogoContainer>
    )
}

export default Logo
