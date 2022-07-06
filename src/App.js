import Layout from "./components/Layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/72048177?v=4" alt="Avatar" />
          <h1>Celio Jr</h1>
          <h3>username</h3>
          <span>celiovjunior</span>
          <div>
            <h4>Followers</h4>
            <span>15</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>15</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>15</span>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
