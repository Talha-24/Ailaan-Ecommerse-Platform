import Searchbar from "../../../Particles/searchInput/Searchbar"
import { SearchInputCont } from "../Header.styled"
import BurgerIcon from "./BurgerIcon"
import Headbuttons from "./Headbuttons"

const UserInteraction = () => {
    return (
        <SearchInputCont>
            <Searchbar />
            <Headbuttons />
            <BurgerIcon />
        </SearchInputCont>
    )
}

export default UserInteraction
