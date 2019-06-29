import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

class NewUserPage extends React.Component {
  handleSubmit = (e) => {
    const { form } = this.props;
    const { data, addUser } = this.props;
    const Newid = data[data.length - 1].id;
    e.preventDefault();
    // const count = data.length - 1;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        addUser(values, Newid);
      }
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Name" style={{ width: '80%' }}>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your name!',
                  whitespace: true,
                },
              ],
            })(<Input placeholder="name" />)}
          </Form.Item>
          <Form.Item label="UserName" style={{ width: '80%' }}>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your username!',
                  whitespace: true,
                },
              ],
            })(<Input placeholder="username" />)}
          </Form.Item>

          <Form.Item label="E-mail" style={{ width: '80%' }}>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input placeholder="Email address" />)}
          </Form.Item>

          <Form.Item label="Phone" style={{ width: '80%' }}>
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input placeholder="Phone" />)}
          </Form.Item>

          <Form.Item label="Address" style={{ marginBottom: 0, width: '80%' }} required>
            <Form.Item style={{ display: 'inline-block', width: '27%' }}>
              {getFieldDecorator('address.street', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your street!',
                    whitespace: true,
                  },
                ],
              })(<Input placeholder="street" />)}
            </Form.Item>
            <span style={{ display: 'inline-block', width: '1%' }} />
            <Form.Item style={{ display: 'inline-block', width: '25%' }}>
              {getFieldDecorator('address.city', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your city!',
                    whitespace: true,
                  },
                ],
              })(<Input placeholder="city" />)}
            </Form.Item>
            <span style={{ display: 'inline-block', width: '1%' }} />
            <Form.Item style={{ display: 'inline-block', width: '25%' }}>
              {getFieldDecorator('address.suite', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your suite !',
                    whitespace: true,
                  },
                ],
              })(<Input placeholder="suite" />)}
            </Form.Item>
            <span style={{ display: 'inline-block', width: '1%' }} />
            <Form.Item style={{ display: 'inline-block', width: '20%' }}>
              {getFieldDecorator('address.zipcode', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your zipcode !',
                    whitespace: true,
                  },
                ],
              })(<Input placeholder="zipcode" />)}
            </Form.Item>
          </Form.Item>

          <Form.Item label="Website" style={{ width: '80%' }}>
            {getFieldDecorator('website', {
              rules: [{ required: true, message: 'Please input website!' }],
            })(<Input placeholder="website" />)}
          </Form.Item>

          <Form.Item label="Company" style={{ width: '80%' }}>
            {getFieldDecorator('company.name', {
              rules: [{ required: true, message: 'Please input your Compant name!' }],
            })(<Input placeholder="company name" />)}
          </Form.Item>

          <Form.Item {...tailFormItemLayout} style={{ width: '80%' }}>
            <Button type="primary" htmlType="submit" style={{ marginLeft: '250px' }}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const WrappedRegistrationForm = Form.create({ name: 'register' })(NewUserPage);
export default WrappedRegistrationForm;
