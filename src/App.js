import React from 'react';
import Table from './components/Table/Table';
import UserCard from './components/UserCard/UserCard';
import FilterForm from './components/Forms/FilterForm';
import './App.css'
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => {
    return state.user.id
  })
  
  const loaded = useSelector((state) => {
    return state.loaded
  })

  return (
    <div className="App">
      {loaded && <FilterForm />}
      <Table />
      {user && <UserCard />}
    </div>
  );
}

export default App;
