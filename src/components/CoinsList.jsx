import "./CoinsList.css";

const CoinsList = ({ coins, sortAscending, handleSortClick }) => (
  <table className="coin-table">
    <thead className="thead" onClick={handleSortClick}>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {coins
        .sort((a, b) => (sortAscending ? a.price - b.price : b.price - a.price))

        .map((coin) => (
          <tr key={coin.id}>
            <td>{coin.rank}</td>
            <td>
              <img className="coin-icon " src={coin.iconUrl} alt={coin.name} />
              {coin.name}
            </td>
            <td>${coin.price}</td>
          </tr>
        ))}
    </tbody>
  </table>
);
export default CoinsList;
