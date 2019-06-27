import React from 'react';
import { Card, Icon, Col } from 'antd';
import PropTypes from 'prop-types';
import CollectionCreateForm from './CollectionCreateForm';
import 'antd/dist/antd.css';
import './dynamic.css';

class Card1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
      visible: false,
    };
  }

  ChangeColor = () => {
    const { theme } = this.state;
    if (theme === '') {
      this.setState({ theme: 'filled' });
    } else {
      this.setState({ theme: '' });
    }
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { data, updateValue } = this.props;
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      // console.log('Received values of form: ', values);
      this.setState({
        visible: false,
      });
      updateValue(values, data.id);
    });
  };

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  render() {
    const { theme, visible } = this.state;
    const { data, deleteUser } = this.props;
    // const { id, name, phone, email, website, data } = this.props.data;
    const img = `https://avatars.dicebear.com/v2/avataaars/${data.username}.svg?options[mood][]=happy`;
    return (
      <Col xs={24} sm={12} md={8} lg={8} xl={6}>
        <Card
          style={{ marginBottom: '30px', margin: '15px' }}
          cover={<img alt="example" src={img} />}
          actions={[
            <button type="button" onClick={this.ChangeColor}>
              <Icon type="heart" theme={theme} style={{ color: 'red' }} />
            </button>,
            <button type="button" onClick={this.showModal}>
              {' '}
              <Icon type="edit" />
            </button>,
            <button type="button" onClick={() => deleteUser(data.id)}>
              <Icon type="delete" theme="filled" />
            </button>,
          ]}
        >
          {
            <div className="card-body">
              <h3>{data.name}</h3>
              <p>
                {' '}
                <Icon type="mail" style={{ marginRight: '10px' }} /> {data.email}
              </p>
              <p>
                <Icon type="phone" style={{ marginRight: '10px' }} /> {data.phone}
              </p>
              <p>
                <Icon type="global" style={{ marginRight: '10px' }} />
                https://{data.website}
              </p>
            </div>
          }
        </Card>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          data={data}
        />
      </Col>
    );
  }
}
Card1.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
  updateValue: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};
export default Card1;
