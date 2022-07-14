import React from 'react';
import styled from 'styled-components';

const Title = styled.h6`
color: rgba(255, 255, 255, 0.5);
font-weight: 500; 
`;

const Input = styled.input`
background-color: #0c0c0c;
border-color: #0c0c0c;
color: rgba(255, 255, 255, 0.4);
font-weight: normal; 

&::-moz-placeholder {
color: rgba(255, 255, 255, 0.4); }

&::-ms-input-placeholder {
color: rgba(255, 255, 255, 0.4); }
&::-webkit-input-placeholder {
color: rgba(255, 255, 255, 0.4); }
`;

const Select = styled.select`
background-color: #0c0c0c;
border-color: #0c0c0c;
color: rgba(255, 255, 255, 0.4);
font-weight: normal; 

&::-moz-placeholder {
color: rgba(255, 255, 255, 0.4); }

&::-ms-input-placeholder {
color: rgba(255, 255, 255, 0.4); }
&::-webkit-input-placeholder {
color: rgba(255, 255, 255, 0.4); }
`;

const Group = styled.div`
 margin-bottom: 1rem; 
`;



function Form1() {
  return (
    <div className="col-md-6 dark-form">
       <div className="p-xl-5 p-0 py-xl-0 py-5 m-xl-5 m-0">
         <div className="section-title mb-4">
           <span className="sub-title dark-title text-white"><span className="title-shape me-2"></span> Calculate BMI</span>
           <h2 className="text-white">What Is BMI?</h2>
         </div>
         <div className="row">
           <div className="col-lg-6 mb-4 mb-lg-0">
             <h6>Height:</h6>
             <Group className="form-group">
               <Input type="email" className="form-control" placeholder="Feet"/>
             </Group>
             <Group className="form-group">
               <Input type="email" className="form-control" placeholder="Inc"/>
             </Group>
             <Group className="form-group mb-0">
               <Input type="email" className="form-control" placeholder="Cms"/>
             </Group>
           </div>
           <div className="col-lg-6">
             <h6>Weight:</h6>
             <Group className="form-group">
               <Select className="form-control basic-select">
                 <option>Type</option>
                 <option>Underweight</option>
                 <option>Normal</option>
                 <option>Overweight</option>
                 <option>Obese</option>
               </Select>
             </Group>
             <Group className="form-group">
               <Select className="form-control basic-select">
                 <option>Kilograms</option>
                 <option>gram</option>
               </Select>
             </Group>
             <Group className="form-group mb-0">
               <a className="btn btn-primary" href="/#">Calculate</a>
             </Group>
           </div>
         </div>
       </div>
    </div>
    );
}

export default Form1;