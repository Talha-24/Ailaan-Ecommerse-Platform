import styled from "styled-components";

export const Banner = styled.div`
height: 293px;
background-color: #2BBEF94A;
display: flex;
padding: 0px 80px;
@media (max-width: 1400px){
padding: 0px 20px;}
@media (max-width: 816px){
flex-direction: column;
align-items: center;
}
@media (max-width: 816px){
height:fit-content}
`
export const apple = styled.div`

`
export const appStore = styled.div`

`
export const Title = styled.h3`
font-size: 25px;
font-weight: bold;
`
export const Description = styled.p`
font-size: 14px;
font-weight: 400;
width: 80%;
text-align: justify;
`
export const Logo=styled.img`
height: 100%;
width: 100%;
object-fit: contain;
`
export const LogoContainer=styled.div`
// height: 60px;
width: 100px;

`