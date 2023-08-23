import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventClass from './components/EventClass';
import EventFunctional from './components/EventFunctional';
import EventBinding from './components/EventBinding';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" />
      {/* <StatefulGreeting greeting="I'm a stateful class component!" name="James" /> */}
      <EventBinding />
      <EventClass />
      <EventFunctional />
    </div>
  );
}

export default App;
