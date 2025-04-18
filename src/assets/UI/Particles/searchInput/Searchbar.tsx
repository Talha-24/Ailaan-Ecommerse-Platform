import { Search, SearchIcon, SearchInput, UserInput } from "../../Layout/Header/Header.styled"
import searchIcon from "../../Image and Svgs/Header/Vector (1).svg"
// import { IoLocation } from "react-icons/io5"
import Location from "./Location"

const Searchbar: React.FC = () => {


  return (
    <SearchInput>
      <Location />
      <UserInput placeholder="Find Cars, Mobile Phones ...."></UserInput>
      <Search >
        <SearchIcon src={searchIcon}></SearchIcon>
      </Search>
    </SearchInput>


  )
}

export default Searchbar
