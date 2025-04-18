import styled from "styled-components";

export const Product = styled.div<{ isproduct?: boolean, product?: boolean, relatedads?: boolean }>`
width:${propse => propse.relatedads ? `230px` : propse.product ? `211px` : `290px`};
height:  ${propse => propse.product ? `fit-content` : `fit-content`};
background-color: white;
border-radius: 15px;
margin-top: ${propse => propse.product ? `10px` : ``};
${propse => propse.product ? `border:1px solid #EDEDED;` : `box-shadow: 0px 0px 40px #dadada;`}
@media(max-width:928px){
   width: ${propse => propse.product ? "290px" : ""}
}
@media (min-width:1197px){
  flex-grow:1;
}
@media(max-width:977px){
flex-grow:1;}
`
export const ProductImage = styled.div<{ product?: boolean }>`
height: ${propse => propse.product ? "fit-content" : "fit-content"};
width: 100%;
`
export const ProductName = styled.h3<{ product?: boolean }>`
font-weight: ${propse => propse.product ? `650` : `500`};
font-size: ${propse => propse.product ? `11px` : `16px`};
color: #141821;

@media (max-width:920px){
font-weight: 500;
font-size: 16px;

}
`
export const ProductLocation = styled.p<{ product?: boolean }>`
color: #858997;
font-weight: ${propse => propse.product ? `400` : `bold`};
font-size: ${propse => propse.product ? `11px` : `16px`};

@media (max-width:920px){
  font-weight: 500;
  font-size: 16px;
  
  }

`
export const AddTime = styled.p<{ product?: boolean }>`
color: black;
font-weight: 400;
font-size: ${propse => propse.product ? `10.5px` : `13.6px`};

@media (max-width:920px){
font-size: 13.6px;
  }
`
export const PriceContainer = styled.div<{ product?: boolean }>`
display: flex;
justify-content: space-between;
align-items: center;

& svg{
margin-right:${propse => propse.product ? `4px` : `8px`};

}


@media (max-width:920px){
  font-weight: 500;
  font-size: 16px;
& svg{
margin-right: '8px';
}
  }
`
export const Price = styled.h5<{ product?: boolean }>`
font-size: ${propse => propse.product ? `14px` : `22px`};
font-weight: 600;
margin: 8px 0px;
margin: ${propse => propse.product ? `0px 0px` : `8px 0px`};


@media (max-width:920px){
  font-size: 22px;
  margin: 8px 0px;
}
`
