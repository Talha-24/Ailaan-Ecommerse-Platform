import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Wrapper = styled.div`
width:min(1600px,100%);
height: fit-content;
display: flex;
flex-direction:row;
align-items: flex-start;
justify-content: flex-end;
gap: 10px;
padding: 0px 100px;
flex-wrap: wrap;
    @media (max-width: 1400px){
    padding: 0px 30px;
    }
    @media (max-width:500px){
    padding:0px 8px;
    }
    @media (max-width: 1133px){
    margin-top: 20px;
    }
  
`
export const link = styled.a
export const Button = styled.button<{ blue: boolean }>`
background-color: ${propse => propse.blue ? "var(--blue)" : "#FAFAFA"} ;

padding: 12px 20.5px;
color: black;
border-radius: 50px;
font-weight: 400;
font-size: 17px;
white-space:nowrap;
@media (max-width:928px){
flex-grow:1;
}
@media (max-width:630px ){
padding: 8px 17px;
font-size: 13px;
}
@media (max-width: 500px){
padding: 8px 14px;
font-size: 10px;
}
@media (max-width:423px){
padding: 5px 12px;
}
`

export const StyledNavLink = styled(NavLink)`
background-color: #fafafa;
padding: 12px 20.5px;
color: black;
border-radius: 50px;
font-weight: 400;
font-size: 17px;
white-space:nowrap;
@media (max-width:928px){
flex-grow:1;
}
@media (max-width:630px ){
padding: 8px 17px;
font-size: 13px;
}
@media (max-width: 500px){
padding: 8px 14px;
font-size: 10px;
}
@media (max-width:423px){
padding: 5px 12px;
}

 &.active {
 background-color: var(--blue);
 color: white;
 }

 & svg {
 width: 2.4rem;
 height: 2.4rem;
 color: var(--color-grey-400);
 transition: all 0.3s;

 }

 &.active svg {
 color: var(--blue);

 }
`