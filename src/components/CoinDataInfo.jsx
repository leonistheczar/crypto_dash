const CoinDataInfo = ({coinData}) => {
      const date = new Date(coinData.last_updated).toLocaleDateString();
    return ( 
        <>
        <h2 className="rank">Rank: # {coinData.market_cap_rank}</h2>
                <div id="coin-info-details">
                <h3>
                  <span className="info-spans">Current Price:</span> ${coinData.market_data.current_price.usd}
                </h3>
                <h3>
                  <span className="info-spans">Market Cap:</span> $
                  {coinData.market_data.market_cap.usd.toLocaleString()}
                </h3>
                <h3><span className="info-spans">High (24h):</span> ${coinData.market_data.high_24h.usd}</h3>
                <h3><span className="info-spans">Low (24h):</span> ${coinData.market_data.low_24h.usd}</h3>
                <h3>
                  <span className="info-spans">Circulating Supply:</span>
                  {coinData.market_data.circulating_supply.toLocaleString()}
                </h3>
                <h3>
                  <span className="info-spans">Total Supply: </span>
                  {coinData.market_data.total_supply.toLocaleString()}
                </h3>
                <h3>
                  <span className="info-spans">All-time High (24h):</span> $
                  {coinData.market_data.ath.usd.toLocaleString()}
                </h3>
                <h3><span className="info-spans">All-time Low (24h):</span> ${coinData.market_data.atl.usd}</h3>
                <h3><span className="info-spans">Last Updated:</span> {date}</h3>
                </div>
        </>
     );
}
 
export default CoinDataInfo;