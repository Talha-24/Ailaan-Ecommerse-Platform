import { Button, ButtonContainer } from "../Header.styled"
import Profilefeatures from "./Profilefeatures"
import sell from "../../../Image and Svgs/Header/Group 1597883029.svg"
import { useState } from "react"

const Headbuttons = () => {
  const [isAuthorized, setisAuthorized] = useState(false);
  return (
    <ButtonContainer>
      {isAuthorized ?
        <Profilefeatures />
        : <Button  black>Login</Button>}
      <Button black={false}><img className="h-[52%] w-[100%]" src={sell} alt="" /></Button>
    </ButtonContainer>
  )
}

export default Headbuttons
