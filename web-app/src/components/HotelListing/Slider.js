import React from "react";
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

const PricesMarks = [
  {
    value: 0,
    scaledValue: 700,
    label: "700"
  },
  {
    value: 25,
    scaledValue: 1000,
    label: "1k"
  },
  {
    value: 50,
    scaledValue: 1500,
    label: "1.5k"
  },
  {
    value: 75,
    scaledValue: 2000,
    label: "2k"
  },
  {
    value: 100,
    scaledValue: 2500,
    label: "2.5k"
  },
  {
    value: 125,
    scaledValue: 3000,
    label: "3k"
  },
  {
    value: 150,
    scaledValue: 3500,
    label: "3.5k"
  },
  {
    value: 175,
    scaledValue: 4000,
    label: "4k"
  },
  {
    value: 200,
    scaledValue: 5000,
    label: "5k"
  }
];

const scale = value => {
  const previousMarkIndex = Math.floor(value / 25);
  const previousMark = PricesMarks[previousMarkIndex];
  const remainder = value % 25;
  if (remainder === 0) {
    return previousMark.scaledValue;
  }
  const nextMark = PricesMarks[previousMarkIndex + 1];
  const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
  return remainder * increment + previousMark.scaledValue;
};

function numFormatter(num) {
  if (num > 699 && num < 1000) {
    return (num / 100).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num >= 5000) {
    return (num / 5000).toFixed(0) + "k"; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
}

export default function NonLinearSlider() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography id="non-linear-slider" gutterBottom>
        Price
      </Typography>
      <Slider
        style={{ maxWidth: 500 }}
        value={value}
        min={0}
        step={1}
        max={200}
        valueLabelFormat={numFormatter}
        marks={PricesMarks}
        scale={scale}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
      <Typography>Value: {scale(value)}</Typography>
    </div>
  );
}