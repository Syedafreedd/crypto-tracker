import React, { useState, useEffect } from "react";
import "./App.css";
import CoinsList from "./components/CoinsList";
// import Searchbox from "./components/searchbox";
// const App = () => {
//   const [data, setData] = useState([]);
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("https://api.coinranking.com/v2/coins");
//       const json = await response.json();
//       setData(json.data.coins.sort((a, b) => b.price - a.price));
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className={isDark ? "dark" : ""}>
//       <h1 className="header">Crypto Tracker</h1>
//       <button className="btn" onClick={() => setIsDark(!isDark)}>
//         Toggle Theme
//       </button>
//       <ul>
//         {data.map((coin) => {
//           const color =
//             coin.price >= 100 ? "green" : coin.price >= 50 ? "yellow" : "red";

//           return (
//             <li key={coin.id} style={{ backgroundColor: color }}>
//               {coin.name} <span>${coin.price}</span>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortAscending, setSortAscending] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://api.coinranking.com/v2/coins");
//       const json = await response.json();
//       setData(json.data.coins);
//     };

//     fetchData();
//   }, []);

//   const handleSort = () => {
//     setSortAscending(!sortAscending);
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredData = data.filter((coin) =>
//     coin.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedData = filteredData.sort((a, b) => {
//     if (sortAscending) {
//       return a.price - b.price;
//     } else {
//       return b.price - a.price;
//     }
//   });

//   return (
//     <div className="container">
//       <h1>CRYPTO TRACKER</h1>
//       <input type="text" onChange={handleSearch} />
//       <button onClick={handleSort}>
//         Sort {sortAscending ? "Ascending" : "Descending"}
//       </button>

//       <ol className="input-group">
//         {sortedData.map((coin) => (
//           <li className="coin-item coin-price" key={coin.id}>
//             {coin.symbol} ----
//             {coin.name} <span>${coin.price}</span>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [coins, setData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.coinranking.com/v2/coins");
      const json = await response.json();
      setData(json.data.coins);
    };

    fetchData();
  }, []);

  const handleSortClick = () => {
    setSortAscending(!sortAscending);
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">Crypto Tracker</h1>
        {/* <Searchbox */
        /* coins={coins}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
  /> */}
      </header>
      <main className="main">
        <CoinsList
          coins={coins}
          sortAscending={sortAscending}
          handleSortClick={handleSortClick}
        />
      </main>
    </div>
  );
};
export default App;
