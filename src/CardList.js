import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';
import Card1 from './Card';
import 'antd/dist/antd.css';

const CardList = (props) => {
  const { data, deleteUser, updateValue } = props;
  const cards = data.map((e) => {
    return <Card1 data={e} key={e.id} deleteUser={deleteUser} updateValue={updateValue} />;
  });

  return (
    <Row type="flex" style={{ margin: '10px' }}>
      {cards}
    </Row>
  );
};
CardList.propTypes = {
  data: PropTypes.array.isRequired,
  updateValue: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};
export default CardList;
