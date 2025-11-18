import { useState, useEffect } from "react";
import { Routes, Route} from "react-router";
import HomePage from "./components/pages/home";
import AboutPage from "./components/pages/about";
import CoinData from "./components/pages/coin-data";
import ErrorPage from "./components/pages/error";
import "./index.css";
const API_URL = import.meta.env.VITE_API_URL;
const COIN_URL = import.meta.env.VITE_COIN_API_URL;
const App = () => {
  // Coins
  const [coins, setCoins] = useState([]);
  // Fetch States
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Controls
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("market_cap_desc");
  const [limit, setLimit] = useState(10);
  // Fetch API DATA (coingecko)
  useEffect(() => {
    // using async / await
    const fetchCoins = async() => {
      try {
        const res = await fetch(`${API_URL}&order=${order}&per_page=${limit}&page=1&sparkline=false`);
        if (!res.ok) {
          throw new Error("Data fetch failed...");
        }
        const data = await res.json();
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchCoins();
  }, [limit]);
  return (
    <Routes>
    <Route path="/" element={
      <HomePage 
       coins={coins}
       setCoins={setCoins}
       loading={loading}
       setLoading={setLoading}
       error={error}
       setError={setError}
       filter={filter}
       setFilter={setFilter}
       order={order}
       setOrder={setOrder}
       limit={limit}
       setLimit={setLimit}
      />
    }>
      </Route>  
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/coin/:id" element={<CoinData coinAPI={COIN_URL}/>}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default App;
