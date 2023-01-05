import React, { FC, useState } from "react";
import "./Individual.css";

type StripeConfig = {
  color: string;
  width: number;
};

type IndividualProps = {};

const Individual: React.FC<IndividualProps> = () => {
  const [stripes, setStripes] = useState([
    { color: "#2e3b51", width: 10 },
    { color: "#495d71", width: 20 },
    { color: "grey", width: 30 },
  ]);

  const [newStripeWidth, setNewStripeWidth] = useState(10);

  const handleChange = (e: any) => {
    const { value } = e.target;
    setNewStripeWidth(parseInt(value)); //TODO: error handling on parseint or does the input guarantee parseable
  };

  const handleClick = () => {
    setStripes([...stripes, { color: "purple", width: newStripeWidth }]);
  };

  return (
    <div className="graphic-wrapper">
      <input
        id="newStripe"
        name="newStripe"
        type="number"
        min="1"
        max="100"
        placeholder="enter stripe width"
        onChange={handleChange}
        value={newStripeWidth}
      />
      <button onClick={handleClick}> add stripe</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          transform: "rotate(45deg)",
          width: "100%",
          border: "2px dotted white",
        }}
      >
        {stripes.map((stripe, index) => (
          <div
            key={index}
            style={{
              height: stripe.width,
              background: stripe.color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Individual;
