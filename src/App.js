import './App.css';
import RootComponent from "./components/RootComponent";
import {Provider} from "react-redux";
import postsStore from "./store/postsStore";

function App() {
  return (
    <Provider store={postsStore} className="App">
      <RootComponent />
    </Provider>
  );
}

export default App;
