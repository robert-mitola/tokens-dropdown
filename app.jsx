// logos can be found here https://github.com/trustwallet/assets/tree/master/blockchains/ethereum/assets

const tokens = [
  { address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", symbol: "USDC" },
  { address: "0x6B175474E89094C44Da98b954EedeAC495271d0F", symbol: "DAI" }
];

const Item = (props) => {
  const {token, onTokenSelected} = props;
  const { address, symbol } = token;
  return (
    <button
      className="item"
     onClick={() => onTokenSelected(token)} 
     >
      <label>{symbol}</label>
      <img src={`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`}
        width={100}
        height={100}
        />
    </button>
  );
}

const Dropdown = (props) => {
  const {tokens} = props;
  const [selected, setSelected] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);
  
  const toggleOpen = React.useCallback(
  () => {
    console.log(open);
    setOpen(!open);
  },
  [setOpen, open],
);
  
  const handleTokenSelected = React.useCallback((token) => {
    const {symbol} = token;
    setSelected(symbol);
    toggleOpen();
  }, [setSelected, toggleOpen]);
  
  return (<div>
      <button
       className="item"
       onClick={toggleOpen} 
       >
        {selected ? selected : 'Select a Token'}
      </button>
      {open ? 
        
        
        <div
          className="items"
        >
          {tokens.map((token) => {
        return <Item
          token={token}
          onTokenSelected={handleTokenSelected} 
         />
      }
        )}
          </div>
          
                   : undefined}
    </div>
    );
}

ReactDOM.render(<div> 
    
    <Dropdown
      tokens={tokens} 
    />
    
  </div>, document.getElementById("root"));
