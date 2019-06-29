import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const TabelPage = (props) => {
  const { data } = props;
  console.log(data);
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Usernmae',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return <Table rowKey={(e) => e.id} columns={columns} dataSource={data} />;
};
TabelPage.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};

export default TabelPage;
