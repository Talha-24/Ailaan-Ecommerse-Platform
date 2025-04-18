import styled from "styled-components";

export const CategoryWrapper=styled.div`
display: flex;
flex-direction: column;
align-items: start;
width: min(1600px,100%);
padding: 0px 100px;
@media (max-width: 1132px){
margin-top: 70px;
}
@media (max-width:1400px){
padding: 0px 30px;
}

@media (max-width:500px){
    padding: 0px 8px;
    }

    @media (max-width:500px){
         margin-top: 0px;
        }

`
export const Title=styled.h1`
  font-weight: 600;
  padding: 25px 0px;
  font-size: 16px;
`
export const CategoryContainer=styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap:20px;

  
@media (max-width:500px){
   gap:18px;
    }

`
export const CategoryImage=styled.div`
height: 105px;
width: 105px;

@media (max-width:500px){
    height: 50px;
    width: 50px;
    }
`
export const Text=styled.p`
font-weight: bold;

@media (max-width:500px){
    height: fit-content;
    width: 50px;
    font-weight: 400;
    font-size: 12px;
    }

`
export const Category=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left:7px;
@media (max-width: 500px){
height: 70px;
flex-grow: 1;
}
`
