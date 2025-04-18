import styled from "styled-components";


export const Wrapper=styled.div`
display: flex;
flex-direction: column;
padding: 0px 100px;
gap: 17px;
width: min(1600px,100%);
@media (max-width:1400px){
padding: 0px 30px;
}
@media (max-width:500px){
padding: 0px 10px;
}
`

export const Options=styled.div`
display: flex;
justify-content: space-between;
`
export const ProductWrapper=styled.div`
display: flex;
gap:20px;
@media (max-width: 1000px){
flex-wrap: wrap;
}
`
export const Text=styled.p`
font-weight: 500;

`
export const MainWrapper=styled.div`
`
export const DataWrapper=styled.div`
display:flex;
flex-direction: column;
gap: 110px;


`
