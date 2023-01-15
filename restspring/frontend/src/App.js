import './App.css';
import {Component} from "react";

class App extends Component{

  state = {
      clients: []
  };

  async componentDidMount() {

      fetch('/clients')
          .then((response) => {
              const reader = response.body.getReader();
              console.log(reader);
          });

  }

  render() {
      const {clients} = this.state;
      return (
          <div className="App">
              <div className="App-header">
                <h2>
                    Clients
                </h2>
                  {clients.map(client =>
                      <div key={client.id}>
                          {client.name} {client.email}
                      </div>
                      )}
              </div>

          </div>
      );
  }

}

export default App;
