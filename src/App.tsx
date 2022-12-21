import "./styles.css";
function App() {
  return (
    <div className="calculator shadow-2xl rounded-lg">
      <div className="header"></div>
      <div className="history"></div>
      <div className="display">
        <span>00000000</span>
      </div>
      <div className="keyboard">
        <div className="button-wrapper">
          <button className="btn-calc">CE</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">C</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">%</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">/</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">7</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">8</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">9</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">x</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">4</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">5</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">6</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">-</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">1</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">2</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">3</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">+</button>
        </div>
        <div className="button-wrapper w-x2">
          <button className="btn-calc">0</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">,</button>
        </div>
        <div className="button-wrapper">
          <button className="btn-calc">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
