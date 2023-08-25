import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventClass from './components/EventClass';
import EventFunctional from './components/EventFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" />
      {/* <StatefulGreeting greeting="I'm a stateful class component!" name="James" /> */}
      {/* <EventBinding />
      <EventClass />
      // <EventFunctional /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* <NestingComponents /> */}
      {/* <ConditionalRenderingFunctional connected={true}/> */}
      {/* <MethodsAsPropsParent /> */}
      {/* <RenderingLists /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledForm /> */}
      <SearchBar />
    </div>
  );
}

export default App;
