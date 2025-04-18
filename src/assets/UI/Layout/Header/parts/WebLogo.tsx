import { Logo, LogoContainer } from "../Header.styled"
import logo from "../../../Image and Svgs/Header/Ailan logo.svg"
const WebLogo = () => {
  return (
    <LogoContainer>
    <Logo src={logo}></Logo>
  </LogoContainer>
  )
}

export default WebLogo
