function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
        <div className="container">
          <nav className="my-2 my-md-0 mr-md-3">
            <img alt="DevSuperior" width="120" />
          </nav>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>22/04/2021</td>
              <td>Barry Allen</td>
              <td>34</td>
              <td>25</td>
              <td>15017.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <p className="text-light">App desenvolvido por <a href="https://github.com/heitordeve" target="_blank" rel="noreferrer">Heitor Carlos</a></p>
          <p className="text-light"><small><strong>Semana Spring React</strong><br />
            Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
        </div>
      </footer>

    </div>
  );
}

export default App;
