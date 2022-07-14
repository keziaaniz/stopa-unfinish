
import styled from 'styled-components';

const Content = styled.div`
background-color: #000000;
padding: 30px;
margin: -30px 30px 0px 30px;
z-index: 1;
position: relative;
border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Title = styled.h3`
color: rgba(255, 255, 255, 0.5);
font-weight: normal; 
font-family: "Teko", sans-serif;
text-transform: uppercase;
margin-top: 0px;
font-size: 30px;

&:before {content: none;}
@media (max-width: 767px) {font-size: 24px; }
@media (max-width: 575px) {font-size: 24px; }
`;

const Text = styled.p`
    color: rgba(255, 255, 255, 0.4);
    font-weight: normal;
    line-height: 24px; 
`;

const Img = styled.img`
    border-radius: 0px;
    width: auto;
    height: auto;

    &:hover {
        -webkit-transform: inherit;
        transform: inherit; }
`;

const FeatureImg = styled.div`
    padding-bottom: 0;
`;


function RowFeatures() {
  return (
    <div className="row">
      <div className="col-lg-4 col-sm-6">
        <div className="dark-feature feature text-center mb-4 mb-lg-0">
          <FeatureImg>
            <Img className="img-fluid" src="../../../../../images/feature-info/10.jpg" alt=""/>
          </FeatureImg>
          <Content>
           <Title >Get in the groove</Title>
           <Text className="mb-0 mt-2">Use a past defeat as a motivator. Remind yourself you have.</Text>
          </Content>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="dark-feature feature text-center mb-4 mb-lg-0">
          <FeatureImg>
            <Img className="img-fluid" src="../../../../../images/feature-info/11.jpg" alt=""/>
          </FeatureImg>
          <Content>
           <Title >Get fit don’t quit</Title>
           <Text className="mb-0 mt-2">Success isn’t really that difficult. There is a significant?</Text>
          </Content>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="dark-feature feature text-center">
          <FeatureImg>
            <Img className="img-fluid" src="../../../../../images/feature-info/12.jpg" alt=""/>
          </FeatureImg>
            <Content>
              <Title >Work your butt off</Title>
              <Text className="mb-0 mt-2">For those of you who are serious about having more.</Text>
            </Content>
        </div>
      </div>
    </div>
    );
}

export default RowFeatures;