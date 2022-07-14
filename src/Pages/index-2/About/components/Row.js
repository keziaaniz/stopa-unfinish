import React from 'react';
import RowItem1 from './Row-Item1';
import RowItem2 from './Row-Item2';


function Row() {
    return (
        <div className="row">
          <RowItem1/>
          <div className="col-xl-4 d-none d-xl-block">
            <img className="img-fluid" src="../../../../../images/about/15.jpg" alt=""/>
          </div>
          <RowItem2/>
        </div>

    );
}

export default Row;