import * as React from 'react';
import './App.css';
import Button from './Component/Button.tsx';
import Input from './Component/Input.tsx';
import Text from './Component/Text.tsx';
import Date from './Component/Date.tsx';
import SelectGroup from './Component/Select.tsx';
import Radiobutton from './Component/Radiobutton.tsx'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <form className="Container">
          <Input />
          <SelectGroup />
          <Date />
          <Radiobutton />
          <Text />
          <Button />
        </form>
      </header>
    </div>
  );
}

export default App;
