import React from 'react';
import styled from 'styled-components';

const HeadTH = styled.th`
border: none;
padding: 20px;
text-align: center; 
background-color: #000000;
color: rgba(255, 255, 255, 0.5);
font-weight: 500;
font-size: 18px; 
`;

const TRSoft = styled.tr`
background: rgba(255, 255, 255, 0.1); 
`;

const TRTransp = styled.tr`
background: transparent; 
`;

const TableDark = styled.table`
border: 1px solid;
border-color: #000000;
`;


function Form2() {
  return (
    <div className="col-md-6 bg-dark-02">
      <div className="p-xl-5 p-0 py-xl-0 py-5 m-xl-5 m-0">
        <TableDark className="table table-dark table-dark-style-02">
          <thead>
            <TRSoft>
              <HeadTH>BMI range - kg/m2</HeadTH>
              <HeadTH>Weight Status </HeadTH>
            </TRSoft>
          </thead>
          <tbody>
            <TRTransp>
              <td>Below 10.2</td>
              <td>Severe Thinness  </td>
            </TRTransp>
            <TRSoft >
              <td>10.0 - 20.5</td>
              <td>Moderate Thinness  </td>
            </TRSoft>
            <TRTransp>
              <td>20.5 - 26.2</td>
              <td>Mild Thinness  </td>
            </TRTransp>
            <TRSoft>
              <td>40.0 - and Above</td>
              <td>Normal</td>
            </TRSoft>
          </tbody>
        </TableDark>
        <p className="mb-0 mt-4">This BMI calculator is for informational purposes only.</p>
      </div>
    </div>
    );
}

export default Form2;