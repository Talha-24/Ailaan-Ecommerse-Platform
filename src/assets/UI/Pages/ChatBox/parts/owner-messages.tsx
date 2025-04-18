import React from 'react'
import { LastSeen, StyledDetails, StyledLastSeen, StyledName, StyledPicture, StyledPictureWrapper, StyledProduct, StyledUserWrapper } from '../index.style'
import user from ".././parts/utils/image.png"

const OwnerMessage: React.FC = () => {
    return (
        <StyledUserWrapper>
            <StyledPictureWrapper> <StyledPicture src={user} /> </StyledPictureWrapper>
            <StyledDetails>
                <StyledLastSeen>
                    <StyledName>Kristin Watson</StyledName>
                    <LastSeen>12m</LastSeen>
                </StyledLastSeen>
                <StyledProduct>Redmi 12C (4GB/128GB)</StyledProduct>
            </StyledDetails>
        </StyledUserWrapper>
    )
}

export default OwnerMessage
