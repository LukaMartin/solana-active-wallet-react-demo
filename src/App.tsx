import "./App.css";
import useSolanaActiveWallet from "solana-active-wallet-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

function App() {
  const { publicKey, wallet, connected, disconnect } = useWallet();
  const { slicedWalletAddress } = useSolanaActiveWallet(publicKey, wallet);
  const { setVisible: setModalVisible } = useWalletModal();

  return (
    <main>
      <h1>Solana Active Wallet React Demo</h1>

      <button className="wallet-button" onClick={() => !connected && setModalVisible(true)}>
        {connected
          ? slicedWalletAddress
          : "Connect Wallet"}
      </button>

      {connected && (
        <button className="wallet-button" onClick={() => disconnect()}>
          Disconnect
        </button>
      )}
    </main>
  );
}

export default App;
