import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Boom from './state-drills/Boom';
import RouletteGun from './state-drills/RouletteGun';

const firstTooltip = (
  <div>
 <Tooltip color='blue' message='tooltip message'>
   COLOR Juan
  </Tooltip>
  <Tooltip color='blue' message='tooltip message'>
  COLOR Juan
 </Tooltip>
  </div>
)
const secondTooltip = (
  <Tooltip color='red' message='another tooltip message'>
   COLOR
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
  {/* <Messages name="Messages" unread={0}/>
  <Messages name="Notifications" unread={10}/> */}
  <TheDate/>
  <Counter/>
  <HelloWorld/>
  <Boom />
  <RouletteGun/>
    </main>
  )
}

export default App