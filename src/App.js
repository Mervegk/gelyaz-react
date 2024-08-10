import './App.css';
import User from './components/User';
const data = {
  fullName: "Merve Keleş",
  city: "İstanbul",
  age: 29
}

function App() {
  return (
    <div>
      <User
        title="Kullanıcı"
        data={data}
        friends={['Burak', 'Yağmur']}
      />
      <hr />
    </div>
  );
}

export default App;
