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
          <Form.Item label="Name">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: 'Please input your name!',
                  whitespace: true,
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="UserName">
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your name!',
                  whitespace: true,
                },
              ],
            })(<Input />)}
          </Form.Item>

          <Form.Item label="E-mail">
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
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Phone">
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Website">
            {getFieldDecorator('website', {
              rules: [{ required: true, message: 'Please input website!' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
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
