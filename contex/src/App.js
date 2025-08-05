import logo from './logo.svg';
import './App.css';
import UserProvider from './component/UserProvider';
import UserProfile from './component/UserProfile';

const App=()=>{
  return (
    <div className="App">
      <UserProvider>
        <UserProfile/>
      </UserProvider>
      
    </div>
  );
}

export default App;
