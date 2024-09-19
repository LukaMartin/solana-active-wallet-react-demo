import "./App.css";
import useActiveWallet from "solana-active-wallet-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { formatAddress } from "./utils/formatAddress";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

function App() {
  const { publicKey, wallet, connected, disconnect } = useWallet();
  const { activePublicKey } = useActiveWallet(publicKey, wallet);
  const { setVisible: setModalVisible } = useWalletModal();

  return (
    <main>
      <h1>Solana Active Wallet React Demo</h1>

      <button className="wallet-button" onClick={() => !connected && setModalVisible(true)}>
        {connected
          ? formatAddress(activePublicKey?.toString(), 5)
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
