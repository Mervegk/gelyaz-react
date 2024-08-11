import './App.css';
import User from './components/User';
import Counter from './components/Counter';
const data = {
  fullName: "Merve Keleş",
  city: "İstanbul",
  age: 29
}

function App() {
  return (
    <div>
      <User />
    </div>
  );
}

export default App;
