import { AboutTitle, TitleIcon, AboutText} from '../../../styles';
import styled from 'styled-components';

const FeatureTitleIcon = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
`;




function RowItem2() {
    return (
        <div className="col-xl-4 col-sm-6">
          <div className="feature-box-03 mb-4">
            <FeatureTitleIcon>
              <TitleIcon className="flaticon-tank-top"></TitleIcon>
              <AboutTitle>Coaches champions</AboutTitle>
            </FeatureTitleIcon>
            <div className="feature-content">
              <AboutText className="mb-0">Along with your plans, you should consider developing an action orientation that will keep you motivated to move forward at all times.</AboutText>
            </div>
          </div>

          <div className="feature-box-03 mb-4">
            <FeatureTitleIcon>
              <TitleIcon className="flaticon-wellness"></TitleIcon>
              <AboutTitle>Parking for 160 spots</AboutTitle>
            </FeatureTitleIcon>
            <div className="feature-content">
              <AboutText className="mb-0">This requires a little self-discipline, but is a crucial component to achievement of any kind. Before starting any new activity.</AboutText>
            </div>
          </div>

          <div className="feature-box-03">
            <FeatureTitleIcon>
              <TitleIcon className="flaticon-water"></TitleIcon>
              <AboutTitle>Large bar with sports nutrition</AboutTitle>
            </FeatureTitleIcon>
            <div className="feature-content">
              <AboutText className="mb-0">Commitment is something that comes from understanding that everything has its price and then having the willingness to pay that price.</AboutText>
            </div>
          </div>
        </div>
        
        );
    }
    
    export default RowItem2;