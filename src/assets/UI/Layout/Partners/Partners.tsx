import React from 'react'
import { Main, Partner, Title } from './Parts/index.style'
import carter from "../../Image and Svgs/Header/Partners/cartier.svg"
import microsoft from "../../Image and Svgs/Header/Partners/microsoft.svg"
import fb from "../../Image and Svgs/Header/Partners/fb.svg"
import channel from "../../Image and Svgs/Header/Partners/channel.svg"
import hermes from "../../Image and Svgs/Header/Partners/hermes.svg"
import dg from "../../Image and Svgs/Header/Partners/dg.svg"

// import carter from "../../Image and Svgs/Header/Partners/cartier.svg"
import Logo from './Parts/Logo'
const Partners: React.FC = () => {
    return (
        <Main>
            <Title>Our Partners</Title>
            <Partner>
                <Logo src={carter} />
                <Logo src={fb} />
                <Logo src={channel} />
                <Logo src={microsoft} />
                <Logo src={hermes} />
                <Logo src={dg} />
            </Partner>
        </Main>
    )
}

export default Partners
