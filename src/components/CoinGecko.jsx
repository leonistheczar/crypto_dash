import CoinGeckoLogo from "../assets/coingecko.png";
const CoinGecko = ({bgColor,txtColor}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",       
        justifyContent: "center",
        gap: "8px",
        margin: "20px",
        padding: "8px",
        background: bgColor,
        borderRadius: '12px',
        color: txtColor,
        width: 'fit-content'
      }}
    >
      <span style={{ fontSize: "14px", fontWeight: 500 }}>Powered by</span>
      <img
        src={CoinGeckoLogo}
        alt="CoinGecko"
        style={{ width: "150px", objectFit: "contain" }}
      />
    </div>
  );
};

export default CoinGecko;
