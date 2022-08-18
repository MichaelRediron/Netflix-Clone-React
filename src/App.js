import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      {requests.map((item) => {
        const { name, request, id, isLarge } = item;
        return (
          <Row
            key={id}
            rowID={id}
            title={name}
            fetchUrl={request}
            isLargeRow={isLarge}
          />
        );
      })}
    </div>
  );
}

export default App;
