import styled from "styled-components";

export const StyledCategoryWrapper = styled.div`
width: 100%;
display: flex;
gap:24px;
flex-wrap:wrap;

`
// <div className='flex justify-center relative items-center  w-full h-full flex-wrap max-[839px]:flex-col'>
export const StyledPosterHead = styled.div`
display: flex;
justify-content: center;
position: relative;
align-items: center;
width:100%;
height: 100%;
flex-wrap: wrap;
@media (max-width:839px){
flex-direction: column;
}
`
{/* <div className='flex items-center gap-10 absolute left-0'>Logo Container */ }
{/* <div className='bg-[#efeded] p-2 rounded-full max-[500px]:p-[6px]'>styledarrow */ }

export const StyledLogoContainer = styled.div`
display: flex;
align-items: center;
gap: 40px;
position: absolute;
left: 0;
`
export const StyledArrow = styled.div`
background-color: #efeded;
padding: 8px;
border-radius:50%;
@media (max-width: 500px){
padding: 6px;
}
`
export const StyledHidden = styled.div`
@media (max-width:690px){
display: none;
}
`
export const StyledText = styled.div`
                justify-content: place-self-center;
                `
export const PostText = styled.div`
                font-weight: 500;
                font-size: 24px;
                color: #333333;
                `
export const StyledCategory = styled.div<{ $add: boolean }>`
width: 100%;
border-radius: 8px;
flex-direction: column;
 padding:32px;
 border: 2px solid #D8DFE0;
 @media (max-width:500px){
padding: 0px;
}`