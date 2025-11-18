import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { ScaleLoader } from "react-spinners";
import CoinHeader from "../CoinDataHeader";
import CoinDataInfo from "../CoinDataInfo";
import CoinLinks from "../CoinLinks";
import CoinPriceChart from "../CoinPriceChart";
import CoinMarketCap from "../CoinMarketCapChart";
import CoinGecko from "../CoinGecko";
const CoinData = ({ coinAPI }) => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Coin Data
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(`${coinAPI}/${id}`);
        if (!res.ok) throw new Error("Failed fetched coin data...");
        const data = await res.json();
        setCoinData(data);
        setIsloading(false);
      } catch (error) {
        setError(error.message);
        setIsloading(false);
      } finally {
        setIsloading(false);
      }
    };
    fetchCoin();
  }, []);
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1 className="title-tag">🚀 Cypto Dash</h1>
        </Link>
        <div className="top-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      {isLoading && (
        <ScaleLoader
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          color="#2f82ff"
        />
      )}
      {error && <div className="error">{error}</div>}

      {!isLoading && !error && (
        <main className="coin-details-container">
          <Link to="/" className="coin-return-dash">
            ⬅️ Return to Home
          </Link>
          <h1>{coinData.id.toUpperCase()} Details</h1>
          {/* Coin Data / Info */}
          {
            <div className="coin" key={coinData.id}>
              <CoinHeader coinData={coinData} />
              <div className="coin-graph">
                <h2 id="coin-graph-title">Chart Info</h2>
                <div className="graphs">
                  <>
                    <CoinPriceChart coinID={coinData.id} />
                  </>
                  <>
                    <CoinMarketCap coinID={coinData.id} />
                  </>
                </div>
              </div>
              <div className="coins-info">
                <CoinDataInfo coinData={coinData} />
              </div>
              <CoinLinks coinData={coinData} />
            </div>
          }
          <div id="logo" style={{ display: "flex", justifyContent: "center" }}>
            <CoinGecko />
          </div>
        </main>
      )}
    </>
  );
};

export default CoinData;
