import { category } from "./index"
import { StyledNavLink, Wrapper } from "./index.style";
const Menubar = () => {



    return (
        <Wrapper>
            <div id='categoryContainer' className="flex  flex-wrap gap-[10px] h-fit items-start mt-[10px]">
            <StyledNavLink   to={"/"+"O".replace(" ","-")}>All Categories</StyledNavLink>
            {category.map(function (value,index) {
                return (
                    <>
                    <StyledNavLink key={index}  to={"/"+value.replace(" ","-")}>{value}</StyledNavLink>
                    </>
                )
            })}
            </div>
        </Wrapper>
    )
}

export default Menubar
