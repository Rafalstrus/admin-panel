import { useEffect } from 'react';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from './store-redux/operations';
import './App.css';

import UserList from './components/userList/user-list.component'
import AddForm from './components/add-form/add-form.component'
import Delete from './components/delete/delete.component'

import { fetchUsersData } from './fetches'

function App({ setDataFromApi }: any) {
  useEffect(() => {
    async function getData() {
      var userData = await fetchUsersData()
      setDataFromApi(userData)
    }
    getData() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      <Delete />
      <p
      style={{fontSize:"2.5vw",fontWeight:700,padding:"3vh"}}
      >
        Dashboard
        </p>
        <UserList />
        <AddForm />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
