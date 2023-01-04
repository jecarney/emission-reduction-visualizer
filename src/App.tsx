import Individual from "./components/Individual/Individual";

const App = () => {
  return (
    <Individual
      stripes={[
        { color: "red", width: 10 },
        { color: "orange", width: 20 },
        { color: "grey", width: 30 },
      ]}
    />
  );
};

export default App;
