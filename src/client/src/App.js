import { useEffect, useState } from 'react';

function App() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/feed') 
      .then((response) => console.log(response))
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <h1>테스트</h1>
      {feedList.map((feed) => (
        <div key={feed.id}>
          <div>{feed.id}</div>
          <div>{feed.photo}</div>
          <div>{feed.board}</div>
        </div>
      ))}
    </div>
  );
}

export default App;

