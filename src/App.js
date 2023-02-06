import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainers";


function App() {
  
  return (
    <div className="App">
      <h1>App Component</h1>
      {/* <User data = {{name:'chaman Gupta',age:25}} /> */}
      <HeaderContainer />
      <HomeContainer />
      <br></br>
      {/* <img src={youtybe} /> */}

     
    </div>
  );
}

export default App;
