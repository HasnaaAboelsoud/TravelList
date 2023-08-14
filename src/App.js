import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';
import PackageList from './components/PackageList/PackageList';
import Stats from './components/Stats/Stats';

function App() {
  const [items,setItems]= useState([]);

  function AddItem(item){
    setItems([...items,item]);
  }
  
  return <>
      <Logo/>
      <Form AddItem={AddItem}/>
      <PackageList items={items} setItems={setItems}/>
      <Stats items={items}/>
  </>
}

export default App;
