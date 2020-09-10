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
  
  return (
    <div className="App">
      <FilterForm />
      <Table />
      {user && <UserCard />}
    </div>
  );
}

export default App;
