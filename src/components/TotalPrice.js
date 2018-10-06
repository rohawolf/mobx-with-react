// src/components/TotalPrice.js
import React from 'react';
import { observer, inject } from 'mobx-react';

@inject( ({ market }) => ({ total: market.total}) )
@observer
class TotalPrice extends React.Component {
  render() {
    const { total } = this.props;
    return (
      <div>
        <hr />
        <p>
          <b>총합: </b> {total}원
        </p>
      </div>
    );
  }
}

export default TotalPrice;