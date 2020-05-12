import React from 'react';
import HobbyList from './HobbyList';
import Guarantee from './Guarantee';
import Counter from './Counter'


function App({passedHobbies, guaranteeBar}) {
  return (
    <div className="App">
     <HobbyList passedHobbies= {passedHobbies}/>
     {guaranteeBar.map(item => {
          return <Guarantee item={item}/>})}
      <Counter />
    </div>
  );
}

export default App;
