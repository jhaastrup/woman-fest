import Customer_Details from "./components/payment";
import RHS from "./components/RHS"; 
//import './globals.css';

function App() {
  return (
    <div className="bg-white flex flex-col-reverse font-inter md:flex-row">
      <div className="w-full md:w-1/2">
        <Customer_Details />
      </div>
      <div className="w-full md:w-1/2">
        <RHS />
      </div>
    </div>
  );
}

export default App;
