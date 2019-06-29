import React from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList';

import 'antd/dist/antd.css';

const App = (props) => {
  const { data, deleteUser, updateValue } = props;
  return (
    <div
      className="ant-container"
      style={{
        margin: '15px',
      }}
    >
      <CardList data={data} deleteUser={deleteUser} updateValue={updateValue} />
      {/* {data.map((e) => {
        return (
          <div key={e.id}>
            <p>{e.name}</p>
            <p>{e.email}</p>
            <p>{e.phone}</p>
            <p>{e.website}</p>
          </div>
        );
      })} */}
    </div>
  );
};
App.propTypes = {
  data: PropTypes.array.isRequired,
  updateValue: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default App;
