import React from 'react';
import PropTypes from 'prop-types';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';

class TabelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  // search function

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),

    filterIcon: (filtered) => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text) => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        // eslint-disable-next-line
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  // search function end
  render() {
    const { data } = this.props;
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend', 'ascend'],
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Usernmae',
        dataIndex: 'username',
        key: 'username',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        ...this.getColumnSearchProps('phone'),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        ...this.getColumnSearchProps('email'),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (e) => {
          return (
            <span>
              {e.street},{e.city},{e.suite},{e.zipcode}
            </span>
          );
        },
      },
      {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        render: (e) => (
          <span>
            {e.name},{e.catchPhrase}
            {e.bs}
          </span>
        ),
      },

      {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
        render: (e) => <span>http://{e}</span>,
        ...this.getColumnSearchProps('website'),
      },
    ];

    return <Table rowKey={(e) => e.id} columns={columns} dataSource={data} />;
  }
}
TabelPage.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TabelPage;
