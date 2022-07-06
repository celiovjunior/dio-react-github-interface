import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import useGithub from "./hooks/gihubHooks";

function App() {
  const { githubState } = useGithub();

  return (
    <Layout>
      { githubState.hasUser ? <>
      {githubState.loading ? <p>Loading</p> : (
        <>
          <Profile />
          <Repositories />
        </>
      )}
      </> : <div>Search for a developer profile by their github's username</div>}

    </Layout>

  );
}

export default App;
