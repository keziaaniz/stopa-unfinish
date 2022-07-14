import styled from 'styled-components';


const TableDark = styled.table`
 border: 1px solid;
 border-color: #191919;
`;

const HeadTH = styled.th`
border: none;
padding: 20px;
text-align: center;

background-color: #191919;
color: rgba(255, 255, 255, 0.5);
font-weight: 500;
font-size: 18px; 
`;

const TD = styled.td`
background: #0c0c0c;
font-size: 14px;
font-weight: normal;
color: rgba(255, 255, 255, 0.4);
padding: 20px;
text-align: center; 
`;

const Coach = styled.div`
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
`;

const AvatarSM = styled.img`
 width: 30px;
 height: 30px;
 display: inline-block;
`;



function TabContent() {
    return (
        <div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="monday" role="tabpanel" aria-labelledby="monday-tab">
    <div className="table-responsive">
      <TableDark className="table table-dark mb-0">
        <thead>
          <tr>
            <HeadTH>Time</HeadTH>
            <HeadTH>Class Type</HeadTH>
            <HeadTH>Coach Name</HeadTH>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TD>06.00 - 07.00</TD>
            <TD>Fitness</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/01.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <td>07.00 - 08.00</td>
            <td>Boxcycle</td>
            <td>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/02.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
              </Coach>
            </td>
          </tr>
          <tr>
            <TD>08.00 - 09.00</TD>
            <TD>Body builing</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/03.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Joana Williams</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>09.00 - 10.00</TD>
            <TD>Crosfit</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/04.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>10.00 - 11.00</TD>
            <TD>Cardio</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/05.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>11.00 - 12.00</TD>
            <TD>Yoga Basics</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/06.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Maria Fields</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>12.00 - 01.00</TD>
            <TD>Sports</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/07.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
              </Coach>
            </TD>
          </tr>
        </tbody>
      </TableDark>
    </div>
  </div>
  <div className="tab-pane fade" id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
    <div className="table-responsive">
      <TableDark className="table table-dark mb-0">
        <thead className="bg-white">
          <tr>
            <HeadTH>Time</HeadTH>
            <HeadTH>Class Type</HeadTH>
            <HeadTH>Coach Name</HeadTH>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TD>06.00 - 07.00</TD>
            <TD>Fitness</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/01.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>07.00 - 08.00</TD>
            <TD>Boxcycle</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/02.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>08.00 - 09.00</TD>
            <TD>Body builing</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/03.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Joana Williams</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>09.00 - 10.00</TD>
            <TD>Crosfit</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/04.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>10.00 - 11.00</TD>
            <TD>Cardio</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/05.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>11.00 - 12.00</TD>
            <TD>Yoga Basics</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/06.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Maria Fields</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>12.00 - 01.00</TD>
            <TD>Sports</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/07.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
              </Coach>
            </TD>
          </tr>
        </tbody>
      </TableDark>
    </div>
  </div>
  <div className="tab-pane fade" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
    <div className="table-responsive">
      <TableDark className="table table-dark mb-0">
        <thead className="bg-white">
          <tr>
            <HeadTH>Time</HeadTH>
            <HeadTH>Class Type</HeadTH>
            <HeadTH>Coach Name</HeadTH>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TD>06.00 - 07.00</TD>
            <TD>Fitness</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/01.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>07.00 - 08.00</TD>
            <TD>Boxcycle</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/02.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>08.00 - 09.00</TD>
            <TD>Body builing</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/03.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Joana Williams</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>09.00 - 10.00</TD>
            <TD>Crosfit</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/04.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>10.00 - 11.00</TD>
            <TD>Cardio</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/05.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>11.00 - 12.00</TD>
            <TD>Yoga Basics</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/06.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Maria Fields</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>12.00 - 01.00</TD>
            <TD>Sports</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/07.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
              </Coach>
            </TD>
          </tr>
        </tbody>
      </TableDark>
    </div>
  </div>
  <div className="tab-pane fade" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
    <div className="table-responsive">
      <TableDark className="table table-dark mb-0">
        <thead className="bg-white">
          <tr>
            <HeadTH>Time</HeadTH>
            <HeadTH>Class Type</HeadTH>
            <HeadTH>Coach Name</HeadTH>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TD>06.00 - 07.00</TD>
            <TD>Fitness</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/01.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>07.00 - 08.00</TD>
            <TD>Boxcycle</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/02.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>08.00 - 09.00</TD>
            <TD>Body builing</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/03.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Joana Williams</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>09.00 - 10.00</TD>
            <TD>Crosfit</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/04.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>10.00 - 11.00</TD>
            <TD>Cardio</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/05.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>11.00 - 12.00</TD>
            <TD>Yoga Basics</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/06.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Maria Fields</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>12.00 - 01.00</TD>
            <TD>Sports</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/07.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
              </Coach>
            </TD>
          </tr>
        </tbody>
      </TableDark>
    </div>
  </div>
  <div className="tab-pane fade" id="friday" role="tabpanel" aria-labelledby="friday-tab">
    <div className="table-responsive">
      <TableDark className="table table-dark mb-0">
        <thead className="bg-white">
          <tr>
            <HeadTH>Time</HeadTH>
            <HeadTH>Class Type</HeadTH>
            <HeadTH>Coach Name</HeadTH>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TD>06.00 - 07.00</TD>
            <TD>Fitness</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/01.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>07.00 - 08.00</TD>
            <TD>Boxcycle</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/02.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>08.00 - 09.00</TD>
            <TD>Body builing</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/03.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Joana Williams</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>09.00 - 10.00</TD>
            <TD>Crosfit</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/04.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>10.00 - 11.00</TD>
            <TD>Cardio</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/05.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>11.00 - 12.00</TD>
            <TD>Yoga Basics</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/06.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Maria Fields</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>12.00 - 01.00</TD>
            <TD>Sports</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/07.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
              </Coach>
            </TD>
          </tr>
        </tbody>
      </TableDark>
    </div>
  </div>
  <div className="tab-pane fade" id="saturday" role="tabpanel" aria-labelledby="saturday-tab">
    <div className="table-responsive">
      <TableDark className="table table-dark mb-0">
        <thead className="bg-white">
          <tr>
            <HeadTH>Time</HeadTH>
            <HeadTH>Class Type</HeadTH>
            <HeadTH>Coach Name</HeadTH>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TD>06.00 - 07.00</TD>
            <TD>Fitness</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/01.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>07.00 - 08.00</TD>
            <TD>Boxcycle</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/02.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>08.00 - 09.00</TD>
            <TD>Body builing</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/03.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Joana Williams</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>09.00 - 10.00</TD>
            <TD>Crosfit</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/04.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>10.00 - 11.00</TD>
            <TD>Cardio</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/05.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>11.00 - 12.00</TD>
            <TD>Yoga Basics</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/06.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Maria Fields</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>12.00 - 01.00</TD>
            <TD>Sports</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/07.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
              </Coach>
            </TD>
          </tr>
        </tbody>
      </TableDark>
    </div>
  </div>
  <div className="tab-pane fade" id="sunday" role="tabpanel" aria-labelledby="sunday-tab">
    <div className="table-responsive">
      <TableDark className="table table-dark mb-0">
        <thead className="bg-white">
          <tr>
            <HeadTH>Time</HeadTH>
            <HeadTH>Class Type</HeadTH>
            <HeadTH>Coach Name</HeadTH>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TD>06.00 - 07.00</TD>
            <TD>Fitness</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/01.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Paul Flavius</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>07.00 - 08.00</TD>
            <TD>Boxcycle</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/02.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Ricardo Marshall</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>08.00 - 09.00</TD>
            <TD>Body builing</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/03.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Joana Williams</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>09.00 - 10.00</TD>
            <TD>Crosfit</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/04.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Gwen Bass</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>10.00 - 11.00</TD>
            <TD>Cardio</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/05.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melanie Byrd</span>
              </Coach>
            </TD>
          </tr>
          <tr className="bg-white">
            <TD>11.00 - 12.00</TD>
            <TD>Yoga Basics</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/06.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Maria Fields</span>
              </Coach>
            </TD>
          </tr>
          <tr>
            <TD>12.00 - 01.00</TD>
            <TD>Sports</TD>
            <TD>
              <Coach className="d-flex align-items-center coach-avatar">
                <AvatarSM className="img-fluid avatar avatar-sm" src="../../../../../images/avatar/07.jpg" alt=""/>
                <span className="ms-3 mb-0 pe-4">Melvin Harvey</span>
              </Coach>
            </TD>
          </tr>
        </tbody>
      </TableDark>
    </div>
  </div>
</div>
    );
}

export default TabContent;