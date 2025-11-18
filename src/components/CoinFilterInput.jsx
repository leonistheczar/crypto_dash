const CoinFilterInput = ({filter,  coinsFilter}) => {
    return ( 
        <div className="filter">
            <input type="text" id="filter-input" value={filter} placeholder="🔎 Filter coins by name or symbol" onChange={(e) => coinsFilter(e.target.value)}  />
          </div>
     );
}
export default CoinFilterInput;