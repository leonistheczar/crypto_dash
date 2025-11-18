const CoinLinks = ({ coinData }) => {
  return (
    <div className="coin-details-links">
      <a target="_blank" href={coinData.links.homepage[0]}>
        🌐 Official Website
      </a>
      <a target="_blank" href={coinData.links.blockchain_site[0]}>
        🔗 BlockChain Site
      </a>
      <a target="_blank" href={coinData.links.whitepaper}>
        🗎 Official Whitepaper
      </a>
    </div>
  );
};

export default CoinLinks;
