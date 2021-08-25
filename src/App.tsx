import { useEffect } from 'react';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from './store-redux/operations';
import './App.css';

import { UserList } from './components/userList/user-list.component'

import { fetchUsersData } from './fetches'

function App({ setDataFromApi }: any) {
  useEffect(() => {
    async function getData() {
      var pokeInfoFetched = await fetchUsersData()
      setDataFromApi(pokeInfoFetched)
    }
    getData() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      <span
      style={{fontSize:"2.5vw",fontWeight:700}}
      >
        Dashboard
        </span>
        <UserList />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
