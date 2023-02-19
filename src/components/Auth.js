import WalletConnect from "./WalletConnect";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

const Auth = () => {
  const appAddress = "64b339c55086ac673e118085b4718a10d2c8bdb1";
  const provider = new AuthProvider(`${appAddress}`); // required
  return (
    <div className="App">
      <ProvideAuth provider={provider}>
        <WalletConnect />
      </ProvideAuth>
    </div>
  );
};

export default Auth;
