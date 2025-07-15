import { Button, ButtonContainer } from "../Header.styled"
import Profilefeatures from "./Profilefeatures"
import sell from "../../../Image and Svgs/Header/Group 1597883029.svg"

const Headbuttons = () => {
  const isAuthorized = true;

  return (
    <ButtonContainer>
      {isAuthorized ?
        < Profilefeatures />
        : <Button onClick={() => { }} black>Login</Button>}
      <Button><img className="h-[52%] w-[100%]" src={sell} alt="" /></Button>
    </ButtonContainer>
  )
}

export default Headbuttons
