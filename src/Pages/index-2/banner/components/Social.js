import styled from 'styled-components';
import '../styles/styles.css';


const SocialBanner = styled.div`
 position: absolute;
 right: 50px;
 top: 50%;
 -webkit-transform: translate(0%, -50%);
         transform: translate(0%, -50%);
 z-index: 1; 

 @media (max-width: 575px) {
      display: none;
}
`;

const List = styled.li`
    text-align: center;
    padding-bottom: 62px;
    position: relative; 
    &:before {
        content: "";
        height: 40px;
        width: 1px;
        background: #ffffff;
        position: absolute;
        bottom: 12px;
        left: 10px; }
    &:last-child{
        &:before {
        content: none; }}
`;

const ListA = styled.a`
    color: #ffffff;
    text-transform: uppercase; 
    &:hover {color: #da1d25; }
`;

function Social() {
  return (
    <SocialBanner>
        <ul className="list-unstyled m-0">
          <List><ListA href="/#">fb</ListA></List>
          <List><ListA href="/#">li</ListA></List>
          <List><ListA href="/#">ig</ListA></List>
          <List><ListA href="/#">yt</ListA></List>
        </ul>
    </SocialBanner>
    );
}

export default Social;