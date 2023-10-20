const Balance = () => {
  //   const SOLANA = require("@solana/web3.js");
  //   const { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } = SOLANA;
  //   const QUICKNODE_RPC = "https://example.solana.quiknode.pro/000000/"; // 👈 Replace with your QuickNode Endpoint OR clusterApiUrl('mainnet-beta')
  //   const SOLANA_CONNECTION = new Connection(QUICKNODE_RPC);
  //   const WALLET_ADDRESS = "YOUR_WALLET_ADDRESS"; //👈 Replace with your wallet address
  //   const AIRDROP_AMOUNT = 1 * LAMPORTS_PER_SOL; // 1 SOL

  // const generateKey = async () => {
  //     const keyPair = solanaWeb3.Keypair.generate();

  //     console.log("Public Key:", keyPair.publicKey.toString());
  //     console.log("Secret Key:", keyPair.secretKey)
  //   };

  //   generateKey();

  //   (async () => {
  //     console.log(`Requesting airdrop for ${WALLET_ADDRESS}`);
  //     const signature = await SOLANA_CONNECTION.requestAirdrop(
  //       new PublicKey(WALLET_ADDRESS),
  //       AIRDROP_AMOUNT
  //     );
  //     const { blockhash, lastValidBlockHeight } =
  //       await SOLANA_CONNECTION.getLatestBlockhash();
  //     await SOLANA_CONNECTION.confirmTransaction(
  //       {
  //         blockhash,
  //         lastValidBlockHeight,
  //         signature,
  //       },
  //       "finalized"
  //     );
  //     console.log(
  //       `Tx Complete: https://explorer.solana.com/tx/${signature}?cluster=devnet`
  //     );
  //   })();

  //   (async () => {
  //     let balance = await SOLANA_CONNECTION.getBalance(
  //       new PublicKey(WALLET_ADDRESS)
  //     );
  //     console.log(`Wallet Balance: ${balance / LAMPORTS_PER_SOL}`);
  //   })();

  const handleClick = () => {
    console.log("Hello");
  };

  return (
    <div>
      <section className=" dark:text-gray-100">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">
            Check your <br />
            <span className="dark:text-violet-400">wallet balance</span> <br />
            down here
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">Your balance is: 100 SOL</p>
          <div className="flex flex-wrap justify-center">
            <button
              className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              onClick={handleClick}
            >
              Check Balance
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Balance;
