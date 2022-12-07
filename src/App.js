import logo from './logo.svg';
import './App.css';
import Pp from './Component/Profile/ProfilePhoto.js';
import Name from './Component/Profile/FullName.js';
import Address from './Component/Profile/Address.js';

function App() {
  return (
    <div className="App">
    <>
     <Pp/>
    </>
     <Name/>
     <Address/>
    </div>
  );
}

export default App;
