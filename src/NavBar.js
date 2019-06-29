import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';
import App from './App';
import Userdata from './Userdata';
import Loading from './Loading';
import NewUserPage from './NewUserPage';
import TabelPage from './TabelPage';
import HeaderPage from './headerpage';

class NavBar extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  deleteUser = (index) => {
    const { data } = this.state;
    const users = data.filter((e) => e.id !== index);
    this.setState({
      data: [...users],
    });
  };

  updateValue = (values, id) => {
    const { data } = this.state;
    const newData = data.map((e) => {
      if (e.id === id) {
        return { ...e, ...values };
        // e.name = values.name;
        // e.email = values.email;
        // e.phone = values.phone;
        // e.website = values.website;
      }
      return e;
    });
    this.setState({
      data: [...newData],
    });
  };

  addUser = (values, newid) => {
    const { data } = this.state;
    const value = [{ ...values, id: newid + 1 }];
    const newEntry = [...data, ...value];
    console.log(newEntry);
    this.setState({
      data: [...newEntry],
    });
  };

  componentDidMount = async () => {
    const response = await Userdata.get('/users');
    this.setState({
      data: response.data,
      loading: false,
    });
  };

  render() {
    const { Content, Footer } = Layout;
    const { data, loading } = this.state;

    const MyAdd = () => {
      return <App data={data} deleteUser={this.deleteUser} updateValue={this.updateValue} />;
    };

    const MyTable = () => {
      return <TabelPage data={data} />;
    };
    const MyNewUser = () => {
      return <NewUserPage data={data} addUser={this.addUser} />;
    };

    if (loading === true) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    return (
      <Layout className="layout">
        <BrowserRouter>
          <HeaderPage />
          <Content>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Route path="/" exact component={MyAdd} />
              <Route path="/TabelPage" exact component={MyTable} />
              <Route path="/NewUserPage" component={MyNewUser} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', background: '#041529', color: 'white' }}>Ruchika Runwal</Footer>
        </BrowserRouter>
      </Layout>
    );
  }
}

export default NavBar;
