import styled from 'styled-components';

export const Section = styled.section`
padding: 90px 0;
@media (max-width: 991px) {
    padding: 60px 0; }
@media (max-width: 767px) {
    padding: 50px 0; }
@media (max-width: 575px) {
    padding: 40px 0; }
`;

export const Container = styled.div`
max-width: 100%;
@media only screen and (min-width: 768px) and (max-width: 991px) {
    max-width: 96%; } 

@media (max-width: 767px) {
    max-width: 100%; }
`;

export const SubTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    color: #ffffff;
`;

export const Shape = styled.span`
    display: inline-block;
    width: 16px; 
    
    &:before{
        content: "";
        background-color: #ffffff;
        height: 20px;
        width: 8px;
        left: 0;
        top: 0;
        position: absolute; }

    &:after {
        content: "";
        background: #da1d25;
        height: 20px;
        width: 8px;
        left: 8px;
        top: 0;
        position: absolute; }
`;

export const SecText = styled.h2`
    font-family: "Teko", sans-serif;
    font-weight: normal;
    margin-top: 0px;
    font-weight: 600;
    text-transform: uppercase; 
    color: #ffffff;
    font-size: 48px;

    @media (max-width: 767px) { font-size: 28px; }
    @media (max-width: 575px) { font-size: 26px; }
`;

//--About--///

export const AboutTitle = styled.h4`
font-family: "Teko", sans-serif;
text-transform: uppercase;
margin-top: 0px;
font-size: 26px;
color: rgba(255, 255, 255, 0.5);
font-weight: normal;
margin-bottom: 0; 
`;

export const TitleIcon = styled.i`
color: #da1d25 !important;
 font-size: 60px;
 min-width: 80px; 
`;

export const AboutText = styled.p`
color: rgba(255, 255, 255, 0.4);
font-weight: normal;
line-height: 24px; 
`;