import { styled } from "styled-components";
export const MyWrapper = styled.div`
width: 100%;
background-color: #FCFCFC;
`
export const Wrapper = styled.div<{ wrap: boolean }>`
height: 120px;
width: min(100%,1600px);
background-color: #FCFCFC;
padding: 0px 100px;
display: flex;
align-items: center;
${propse => propse.wrap ? "flex-wrap:wrap" : ""};
gap:40px;

@media (max-width: 1200px){
height:100px;
justify-content: space-between;
}
@media (max-width: 1400px){
padding: 0px 30px;
}
@media (max-width: 500px){
padding: 0px 10px;
}
@media (max-width: 500px){
height: 70px;
}

`
export const Button = styled.button<{ black?: boolean, }>`
color:  white;
background-color:${(propse) => propse.black ? "#333333" : "var(--blue)"};
font-weight: 400;
font-size: 20px;
padding: ${(propse) => propse.black ? "10px 45px" : "0px"} ;
display: flex;
width: ${(propse) => propse.black ? "" : "140px"};
height: ${(propse) => propse.black ? "" : "58px"};
align-items: center;
justify-content: flex-start;
border-radius: 30px;
 box-shadow: 0 4px 10px  ${(propse) => propse.black ? "rgba(51, 51, 51, 0.2)" : "rgba(43, 190, 249, 0.2)"};
@media (max-width: 1200px){
  height: 50px;
}
`
export const search = styled.svg`
height: 50px;
width: 80px;
background-color: yellow;
color: white;
`
export const LogoContainer = styled.div`
 height: 80px;
 width: 140px;
 @media (max-width:1200px){
        margin-bottom: 10px;
 }
@media (max-width:500px){
    height: 80px;
    width: 100px;
}
`
export const Logo = styled.img`
height: 100%;
width: 100%;
`
export const SearchInputCont = styled.div`
display: flex;
width: 100%;
gap: 20px;
height: 48%;
@media(max-width: 1200px){
width: fit-content;
}
`
export const SearchInput = styled.div<{ isShow?: boolean }>`
display: flex;
align-items: center;
width: 100%;
border: 2px solid var(--blue);
background-color: white;
border-radius: 100px;
position: relative;
@media (${propse => propse.isShow ? "min" : "max"}-width: 1200px){
display: none;
}
`
export const Search = styled.div`
 height:  "20px";
 margin: 0px 22px;
`

export const SearchIcon = styled.img`
height: 100%;
width: 100%;
`
export const ProfileIcon = styled.img`
height: 20px;
width: 20px;
@media(max-width:1200px){
height: 45px;
width: 30px;
}
`
export const ProfileContainer = styled.div<{ profile?:boolean }>`
 display: flex;
 gap: ${(propse) => propse.profile ? "5px" : "18px"};
 width: ${(propse) => propse.profile ? "" : "160px"};
 align-items: center;
 ${propse => propse.profile ? "" : `@media (max-width: 1200px){
    min-width:  fit-content;
}`}`

export const ButtonContainer = styled.div`
display: flex;
gap: 10px;
@media(max-width:1200px){
gap: 20px;
}
@media(max-width: 577px){
display: none;
}
`
export const BurgerIconContainer = styled.div`
@media (min-width: 577px){
display: none;
}
`
export const UserInput = styled.input`
outline: none;
width: 60%;
color: #333333;
font-family: Poppins;
font-size: 17px;
font-weight:400;
margin-left: 20px;
`




