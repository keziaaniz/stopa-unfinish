import styled from 'styled-components';





export const AnchorItem = styled.a`
    -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 3px 0px;
  color: #333333;
  text-transform: capitalize;
  font-size: 14px; 
  &:hover {
    color: #da1d25;
    background: none
   };
  &:focus {
    color: #da1d25;
    background: none
   };
  &:active {
     color: #da1d25;
     background: none
    };
`;

export const  PagesTitle = styled.h6`
font-size: 18px;
line-height: 1.6; 
margin-bottom: 10px !important;
margin-top: 20px; 
font-family: "Teko", sans-serif;
font-weight: normal;
color: #333333;
margin-top: 0px;
font-weight: 600;
text-transform: uppercase;
`;

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 44px 14px 32px;
    gap: 10px;
    width: 211px;
    height: 352px;
    border: 1px solid #1D2527;
    border-radius: 24px;
    margin-top: 95px;
`;