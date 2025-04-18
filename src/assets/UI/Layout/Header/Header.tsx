
import { MyWrapper, Wrapper } from "./Header.styled"
import WebLogo from "./parts/WebLogo";
import UserInteraction from "./parts/UserInteraction";
const Header = () => {

  return (
    <MyWrapper>
      <Wrapper wrap={false}>
        <WebLogo />
        <UserInteraction />
      </Wrapper>
    </MyWrapper>
  )
}

export default Header
