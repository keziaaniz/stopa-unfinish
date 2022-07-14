import styled from 'styled-components';
import TabContent from './Tab-Content';

const NavLink = styled.a`
padding: 10px;
border: none;
font-size: 16px;
padding: 12px 30px;
border-radius: 0;
font-weight: 600;
background: #0c0c0c;
color: rgba(255, 255, 255, 0.5);

@media (max-width: 575px) {padding: 20px 10px; }

nav-tabs .nav-item .nav-link.active { background-color: #191919; }
`;

const NavItem = styled.li`
margin-bottom: 10px;
margin-right: 10px; 
&:last-child{ margin-right: 0; }
`;


function RowClasses() {
    return (
        <div className="row">
            <div className="col-12">
                <ul className="nav nav-tabs nav-pills flex-column flex-sm-row mb-4" role="tablist">
                  <NavItem className="nav-item flex-sm-fill text-center">
                    <NavLink className="nav-link active" id="monday-tab" data-bs-toggle="pill" href="#monday" role="tab" aria-controls="monday" aria-selected="true"> Monday</NavLink>
                  </NavItem>
                  <NavItem className="nav-item flex-sm-fill text-center">
                    <a className="nav-link" id="tuesday-tab" data-bs-toggle="pill" href="#tuesday" role="tab" aria-controls="tuesday" aria-selected="false">Tuesday</a>
                  </NavItem>
                  <NavItem className="nav-item flex-sm-fill text-center">
                    <NavLink className="nav-link" id="wednesday-tab" data-bs-toggle="pill" href="#wednesday" role="tab" aria-controls="wednesday" aria-selected="false">Wednesday</NavLink>
                  </NavItem>
                  <NavItem className="nav-item flex-sm-fill text-center">
                    <NavLink className="nav-link" id="thursday-tab" data-bs-toggle="pill" href="#thursday" role="tab" aria-controls="thursday" aria-selected="false">Thursday</NavLink>
                  </NavItem>
                  <NavItem className="nav-item flex-sm-fill text-center">
                    <NavLink className="nav-link" id="friday-tab" data-bs-toggle="pill" href="#friday" role="tab" aria-controls="friday" aria-selected="false">Friday</NavLink>
                  </NavItem>
                  <NavItem className="nav-item flex-sm-fill text-center">
                    <NavLink className="nav-link" id="saturday-tab" data-bs-toggle="pill" href="#saturday" role="tab" aria-controls="saturday" aria-selected="false">Saturday</NavLink>
                  </NavItem>
                  <NavItem className="nav-item flex-sm-fill text-center">
                    <NavLink className="nav-link" id="sunday-tab" data-bs-toggle="pill" href="#sunday" role="tab" aria-controls="sunday" aria-selected="false">Sunday</NavLink>
                  </NavItem>
                </ul>
                <TabContent/>
            </div>
        </div>

    );
}

export default RowClasses;