import { Link } from "react-router";
import CoinCard  from "../CoinCard";
import CoinFilterInput from "../CoinFilterInput";
import CoinLimitSelect from "../CoinLimitSelect";
import CoinsSort from "../CoinsSort";
import { ScaleLoader } from 'react-spinners';
const HomePage = ({
    coins,
    loading,
    error,
    filter,
    setFilter,
    order,
    setOrder,
    limit,
    setLimit
}) => {
    // Filtered Coins
  const filteredCoins = coins.filter((coin) => {
    return(
      coin.name.toLowerCase().includes(filter.toLowerCase()) || 
      coin.symbol.toLowerCase().includes(filter.toLowerCase())
    )
  })
  .slice()
  .sort((a,b) => {
    switch(order){
      case "market_cap_desc":
        return b.market_cap - a.market_cap;
      case "market_cap_asc":
        return a.market_cap - b.market_cap;
      case "price_desc":
        return b.current_price - a.current_price;
      case "price_asc":
        return a.current_price - b.current_price;
      case "change_desc":
        return b.price_change_percentage_24h - a.price_change_percentage_24h;
      case "change_asc":
        return a.price_change_percentage_24h - b.price_change_percentage_24h;
      default:
        return 0;
    }
  })
    return ( 
    <div className="home-page">
        <div className="header">
            <Link to="/"><h1 className="title-tag">🚀 Cypto Dash</h1></Link>
            <div className="top-nav">
                <Link to="/">Home</Link>   
                <Link to="/about">About</Link>
            </div>
        </div>
      {loading && <ScaleLoader style={{display: 'flex', justifyContent:'center', alignContent:'center'}} color="#2f82ff" />}
      {error && <div className="error">{error}</div>}
        {/* Data Controls */}
        <div className="top-controls">
          <CoinFilterInput filter={filter} coinsFilter={setFilter} />
          <CoinLimitSelect limit={limit} setLimit={setLimit} />
          <CoinsSort order={order} onOrderChange={setOrder} />
        </div>
      {!loading && !error && (
        <main className="grid">
          {filteredCoins.length > 0 ? filteredCoins.map
            ((coin) => {
              return (
                <CoinCard key={coin.id} coin={coin} />
              );
          }) : <p>No coin matched for the following search...</p>}
        </main>
      )}
    </div>
     );
}
 
export default HomePage;{

}