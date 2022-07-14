import styled from "styled-components";

const SecTitle = styled.div`
    margin-bottom: 50px;
    text-align: center !important;
    @media (max-width: 575px) { margin-bottom: 20px; }
`;


function RowTitle() {
  return (
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <SecTitle>
        </SecTitle>
      </div>
    </div>
    );
}

export default RowTitle;