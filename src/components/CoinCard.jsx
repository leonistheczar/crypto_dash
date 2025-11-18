import { Link } from "react-router";
const CoinCard = ({coin}) => {
    return ( 
      <Link to={`/coin/${coin.id}`}>
      <div className="coin-card" key={coin.id}>
                <div className="coins-header">
                  <img
                    className="coins-image"
                    src={coin.image}
                    alt={coin.name}
                  />
                  <div>
                    <h2>{coin.name}</h2>
                    <p className="symbol">{coin.symbol.toUpperCase()}</p>
                  </div>
                </div>
                <div className="coins-data">
                <p>Price: ${coin.current_price.toLocaleString()}</p>
                <p id="price-change" 
                  className={
                    coin.price_change_percentage_24h >= 0
                      ? "positive"
                      : "negative"
                  }
                >
                  {coin.price_change_percentage_24h.toFixed(2)}% (24h)
                </p>
                <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
                </div>
              </div>
        </Link>
     );
}
 
export default CoinCard;