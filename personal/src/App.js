import './App.css';
import ActivityList from './components/ActivityList';
import Container from './components/Container';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App" style={{display:'flex', flexDirection:"row"}}>
      <ActivityList>
        <Paragraph text="This is a paragraph" />
      </ActivityList>
    </div>
  );
}

export default App;
