const CoinHeader = ({coinData}) => {
    return ( 
        <div className="coin-header">
              <h2 className="coin-details-title"><img
                src={coinData.image.large}
                alt={coinData.id}
                className="coin-details-image"/>
                {coinData.name} ({coinData.symbol.toUpperCase()})
              </h2>
              <p className="coin-details-description">
                {coinData.description.en.split(". ").slice(0, 2).join(". ") +
                  "."}
              </p>
             </div>
     );
}
 
export default CoinHeader;