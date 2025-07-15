import React from 'react'
import { PostText, StyledArrow, StyledHidden, StyledLogoContainer, StyledPosterHead, StyledText } from './index.style'
import WebLogo from '../../../Layout/Header/parts/WebLogo'
import { FaArrowLeft } from 'react-icons/fa'
const PostHeader:React.FC = () => {
  return (
    <StyledPosterHead>
    <StyledLogoContainer>
        <StyledArrow>
            <FaArrowLeft fontSize={'23px'} />
        </StyledArrow>
        <StyledHidden>
            <WebLogo />
        </StyledHidden>
    </StyledLogoContainer>
    <StyledText>
        <PostText> Post your Add</PostText>
    </StyledText>
</StyledPosterHead>
  )
}

export default PostHeader
