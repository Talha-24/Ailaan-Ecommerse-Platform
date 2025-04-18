import { IoMenu } from "react-icons/io5"
import { BurgerIconContainer } from "../Header.styled"

const BurgerIcon = () => {
    return (
        <BurgerIconContainer>
            <IoMenu className="text-[45px] text-[var(--blue)] max-[501px]:text-[30px]" />
        </BurgerIconContainer>
    )
}

export default BurgerIcon
