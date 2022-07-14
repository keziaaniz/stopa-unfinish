import { AboutTitle, TitleIcon, AboutText} from '../../../styles';
import styled from 'styled-components';


const FeatureRight = styled.div`
text-align: right;
@media (max-width: 575px) {text-align: left; }
`;

const RightTitleIcon = styled.div`
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    @media (max-width: 575px) {
        -webkit-box-orient: inherit;
        -webkit-box-direction: inherit;
        -ms-flex-direction: inherit;
        flex-direction: inherit;}
`;


function RowItem1() {
    return (
      <div className="col-xl-4 col-sm-6">
        <FeatureRight className="mb-4">
          <RightTitleIcon>
            <TitleIcon className="flaticon-treadmill-1"></TitleIcon>
            <AboutTitle>Modern equipment</AboutTitle>
          </RightTitleIcon>
          <div className="feature-content">
            <AboutText className="mb-0">Benjamin Franklin, inventor, statesman, writer, publisher and economist relates in his autobiography that early in his life he decided to focus on arriving.</AboutText>
          </div>
        </FeatureRight>

        <FeatureRight className="mb-4">
          <RightTitleIcon>
            <TitleIcon className="flaticon-lotus"></TitleIcon>
            <AboutTitle>The area of 7000 m2</AboutTitle>
          </RightTitleIcon>
          <div className="feature-content">
            <AboutText className="mb-0">What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan for, every possible setback.</AboutText>
          </div>
        </FeatureRight>

        <FeatureRight>
          <RightTitleIcon>
            <TitleIcon className="flaticon-showers"></TitleIcon>
            <AboutTitle>Swimming pools available</AboutTitle>
          </RightTitleIcon>
          <div className="feature-content">
            <AboutText className="mb-0">Commit the plan to paper and then keep it with you at all times. Review it regularly and ensure that every step takes you closer to your Vision and Goals.</AboutText>
          </div>
        </FeatureRight>
      </div>
        
        );
    }
    
    export default RowItem1;