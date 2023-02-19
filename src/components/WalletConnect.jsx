import { Auth, useAuth } from "@arcana/auth-react";
import Dashboard from "./Dashboard";
const onLogin = () => {
  // Route to authenticated page
  <Dashboard />;
};

function WalletConnect() {
  const auth = useAuth();
  return (
    <div>
      {auth.loading ? (
        "Loading"
      ) : auth.isLoggedIn ? (
        <p>Logged In</p>
      ) : (
        <div>
          <Auth externalWallet={true} theme={"light"} onLogin={onLogin} />
        </div>
      )}
    </div>
  );
}
export default WalletConnect;
