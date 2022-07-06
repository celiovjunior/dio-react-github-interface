import Layout from "./components/Layout";
import GithubProvider from "./providers/GithubProvider";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import { ResetCSS } from "./Global/resetCSS";

function App() {
  return (
    <main>
      <GithubProvider>

        <ResetCSS />
          <Layout>
            <Profile />
            <Repositories />
          </Layout>

      </GithubProvider>
    </main>
  );
}

export default App;
