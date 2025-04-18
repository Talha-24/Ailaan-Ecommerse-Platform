import styled from "styled-components";
export const Main=styled.main`
width: min(100%,1600px);
padding: 0px 100px;
font-family: Poppins,sans-serif;
display: flex;
flex-direction: column;
gap: 40px;
margin-top: 30px;
margin-bottom: 90px;
@media(max-width:1400px){
padding: 0px 30px;}

@media (max-width:500px){
padding: 0px 10px;
}

`
export const Partner=styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 650px){
flex-wrap: wrap;
}

`
export const LogoContainer=styled.div`
height: 80px;
width: 150px;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 500px){
width: 130px;
}
`
export const Image=styled.img`
height: 100%;
width: 100%;
object-fit: contain;
`
export const Title=styled.h4`
font-size: 19px;
font-weight: 500;
margin-left: 16px;
`