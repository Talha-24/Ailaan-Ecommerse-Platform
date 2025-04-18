import styled from "styled-components"


export const OwnerWrapper = styled.div`
display: flex;
height: 100%;
gap:32px;
@media (max-width:1100px){
flex-wrap:wrap;
}
`

export const MainWrapper = styled.div`
min-height: 100vh;
padding: 0px 100px;
width: min(100%,1600px);
@media(max-width: 1400px){
margin-top:40px;
padding: 0px 32px;
}
@media(max-width:500px){
padding: 0px 8px;
}
`
// <div className='h-40 mt-7 flex items-center gap-4 w-full max-[843px]:min-h-40  max-[800px]:min-h-fit max-[800px]:flex-wrap'>

export const ProductDetailsWrapper=styled.div`
height:160px;
display: flex;
margin-top:28px;
gap:16px;
@media(max-width:843px){
min-height:160px;
}
@media (max-width:800px){
min-height: fit-content;
flex-wrap:wrap;
}
`
export const RelatedAdds=styled.div`
margin-top: 60px;
min-height:32px;
`