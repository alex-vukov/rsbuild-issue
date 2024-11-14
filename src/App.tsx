import './App.css';

const App = () => {
  console.log(process.env.TEST_ENV_VAR);
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
