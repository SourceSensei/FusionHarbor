const getbalance = () => {
  const SOLANA = require("@solana/web3.js");
  const { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } = SOLANA;
  const QUICKNODE_RPC = "https://example.solana.quiknode.pro/000000/"; // 👈 Replace with your QuickNode Endpoint OR clusterApiUrl('mainnet-beta')
  const SOLANA_CONNECTION = new Connection(QUICKNODE_RPC);
  const WALLET_ADDRESS = "YOUR_WALLET_ADDRESS"; //👈 Replace with your wallet address

  (async () => {
    let balance = await SOLANA_CONNECTION.getBalance(
      new PublicKey(WALLET_ADDRESS)
    );
    console.log(`Wallet Balance: ${balance / LAMPORTS_PER_SOL}`);
  })();

  return <div>getbalance</div>;
};

export default getbalance;
