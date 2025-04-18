import styled from "styled-components";
/*
import * as S from "styleComponentLocation"
Now, by importing the S globally, means we are exporting our styled components, in the form of  an object.
So we can access those properties using . Notation like S.Button, S.Wrapper. This is pretty useful,but if we go deeper,
during tree shaking , the extra and unused styling is not removed, bcz linter is unable make difference b/w Used and Unused code 

2.For a style we can simple make some variable like
  const red=css`
  color: red;
  `
  const Heading=styled.h1`
  ${red}
  `

3.Stying can also be passed through propse,during dynamic styling
4. It is better to use a convention with propse, so that a new developer can easily make difference between,jsx props and styling propse

const Button = styled.button`
  color: ${(p) => p.$color};
`;

const ClickMe = ({ color, disabled, onClick }) => {
  return (
    <Button
      $color={color}
      disabled={disabled}
      onClick={onClick}
    >
      Click Me
    </Button>
  );
};

Conclusion:
It completly depends upon the project need, if the project demand , optimization and less bundle size, the import individual styled component in the file,
But if your need is to have clean, maintainable and easy to understand the code without caring of bundle size, you can import all of the styling in a separate object.
Result:
   I think we use dot Notation method because it provides us maintainablity, clarity and make it easier for others to undrestand but we also have to check the styledComponent.js file on 
   regular basis, so that it has no left unsused code.*/
const $gray = `
color:#858997;
`
export const ChatBoxWrapper = styled.div`
padding: 0px 100px;
display: flex;
width: min(100%,1600px);
@media (max-width:1400px){
padding: 0px 30px;}
@media (max-width: 500px){
padding: 0px 10px;
}
`
export const UserWrapper = styled.div`
width: 400px;
font-weight: bold;
margin-right: 15px;
margin-top:75px;
@media(max-width: 1043px){
display: none;
}
`

export const Text = styled.div`
font-size: 20px;
border-bottom: 2px solid #D8DFE0;
width: 100%;
padding: 9px 22px;
`
export const StyledButtons = styled.div`
display: flex;
width: 100%;
align-items:center;
justify-content: center;
gap:8px;
margin: 20px 0px;
`
export const StyledButton = styled.div<{ $color: boolean }>`

color:  ${({ $color }) => $color ? `white` : `#858997`};
font-size: 15px;
font-weight: 400;
background-color: ${p => p.$color ? `var(--blue)` : `#FAFAFA`};
text-align: center;
padding: 9px 25px;
white-space: nowrap;
border-radius: 20px;
`
export const StyledPerson = styled.div`
padding: 9px 22px;
`
export const StyledSearch = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 background-color: #FAFAFA;
 padding: 10px 20px;
 border-radius: 12px;
`
export const StyledSearchInput = styled.input`
${$gray}
padding: 2px 8px;
outline: none;
font-weight: 400;
color: #000000;
font-size:18px;
`
export const StyledUserWrapper=styled.div`
display: flex;
gap:12px;
align-items: center;
padding: 15px 6px;
border-radius: 12px;
background-color: white;
&:hover{
background-color: #EFEFFD;
}

`
export const StyledPictureWrapper=styled.div`
height: 48px;
width: 50px;
`
export const StyledPicture=styled.img`
height: 100%;
width: 100%;
border-radius: 50%;
object-fit:cover;
`
export const StyledDetails=styled.div`
width: 80%;
font-weight: 400;
`
export const StyledLastSeen=styled.div`
display: flex;
width:100%;
justify-content: space-between;

`
export const StyledName=styled.b`
font-size: 18px;
font-weight: 600;
color: #000000;
`
export const StyledProduct=styled.p`
color: #858997;
font-size: 13px;
line-height: 0.9;
`
export const LastSeen=styled.p`
font-size: 12px;
font-weight: 500;
color: #858997;
`
export const StyledUsersChat=styled.div`
display: flex;
flex-direction: column;
gap:10px;
margin-top:8px;
`

export const StyledDashboard=styled.div`
width:100%;
border: 2px solid #dadada;
display: flex;
flex-direction: column;
border-radius: 5px;
margin-top: 30px;
@media (max-width: 1041px){
margin-top: 20px;}
`
export const StyledDashboardUser=styled.div`
width: 100%;
height: 100px;
padding: 0px 60px;
display: flex;
align-items: center;
border-bottom: 2px solid #dadada;
@media(max-width: 663px){
padding: 0px 10px;}
`
export const StyledDashbaordProduct=styled.div`
`
export const Options=styled.div`
height: 200px;
width: 200px;
background-color: gray;
`
export const StyledChatArea=styled.div`
display: flex;
flex-direction: column;
gap:24px;
margin-top:80px;
@media (max-width: 500px){
margin-top: 8px;
}
`
// <div className='flex items-center gap-6 w-full max-[500px]:gap-2'>
export const StyledActiveChatProduct=styled.div`
display: flex;
align-item: center;
gap:24px;
width: 100%;
@media (max-width:500px){
gap:8px;
}
`

export const StyledProductContainer=styled.div`
height: 100px;
width: 100px;
border-radius: 12px;
margin: 8px 0px;
@media (max-width: 450px){
height: 60px;
width: 60px;
}
@media (max-width: 350px){
display: hidden;
}
`

export const StyledProductDetailsContainer=styled.div`

`