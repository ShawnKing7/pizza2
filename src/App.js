import logo from './logo3.jpg';
import './App.css';


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1>Welcome to Donatello's Wood Fired Pizzeria</h1>
          </p><br></br>
          <h4>Check out our menu below and order effortlessly with our digital assistant.<p> Your handcrafted pizza will be ready for pickup within 30 minutes of ordering.</p>
            <p>Choose any 4 toppings on any crust for one low price!</p>
          </h4>
          <div>
            <iframe
                allow="microphone;"
                width="350"
                height="430"
                src="https://console.dialogflow.com/api-client/demo/embedded/c8a72ec0-fbef-4906-b5c2-541d57e60da0">
            </iframe></div>


        </header>

        <footer className='App-footer'>
          <div class="flex-container">
            <div><h3>Size</h3>
              <p>Small $8.99</p><p>Medium $10.99</p><p>Large $12.99</p><p>Family $14.99</p></div>

            <div><h3>Crust Style</h3>
              <p>Thin</p>
              <p>Regular</p>
              <p>Pan</p></div>

            <div><h3>Carnivore</h3>
              <p>Pepperoni</p>
              <p>Italian Sausage</p>
              <p>Bacon</p>
              <p>Canadian Bacon</p></div>

            <div>
              <h3>Herbivore</h3>
              <p>Roma Tomatoes</p>
              <p>Red Onions</p>
              <p>Bell Peppers</p>
              <p>Mushrooms</p></div>
          </div><p></p><div>
          <h4> Donatello's Wood Fired Pizzeria  <p>123 Maroon Bells Way</p><p>Aspen, CO</p></h4>
          Copyright 2021

        </div>


        </footer>


      </div>


  );
}



export default App;