import { useState, useEffect } from "react";

function App() {
  const [frequency, setFrequency] = useState(undefined);
  const [yaxis, setYaxis] = useState([]);
  const [xaxis, setXaxis] = useState([]);

  const FetchData = async () => {
    const response = await fetch(
      "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new"
    );
    let result = await response.text();
    result = result.split("\n").filter(Boolean);

    const map = {};
    result?.forEach((item) => {
      if (map[item]) {
        map[item]++;
      } else {
        map[item] = 1;
      }
    });
    setFrequency(map);
    setXaxis(Object.keys(map).sort((a, b) => a - b)); // Sort the x-axis keys numerically
  };

  useEffect(() => {
    if (frequency) {
      const max = Math.max(...Object.values(frequency));
      const maxVal = Math.ceil(max / 10) * 10;
      let arr = [];
      for (let i = maxVal / 10; i >= 0; i--) {
        arr.push(i * 10);
      }
      setYaxis(arr);
    }
  }, [frequency]);

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="flex flex-col items-center p-6">
      {/* Chart Container */}
      <div className="relative w-full max-w-4xl h-96 border-l border-b border-gray-400">
        {/* Y-Axis Grid Lines and Labels */}
        {yaxis.map((value, index) => (
          <div
            key={index}
            className="absolute w-full flex items-center"
            style={{ bottom: `${(index / (yaxis.length - 1)) * 100}%` }}
          >
            {/* Grid Line */}
            <div className="absolute w-full border-t border-gray-300"></div>
            {/* Label */}
            <span className="absolute -left-8 text-gray-600">{value}</span>
          </div>
        ))}

        {/* X-Axis Grid Lines */}
        <div className="absolute bottom-0 left-0 w-full flex">
          {xaxis.map((value, index) => (
            <div
              key={index}
              className="relative flex-1 border-r border-gray-300"
            >
              <span
                className="absolute bottom-0 transform translate-x-1/2 text-gray-600"
                style={{ left: "50%" }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Bars */}
        <div className="absolute bottom-0 left-0 w-full flex items-end">
          {xaxis.map((key, index) => (
            <div key={index} className="flex-1 flex justify-center">
              <div
                className="bg-blue-500 hover:bg-blue-700 transition-all"
                style={{
                  width: "40px",
                  height: `${frequency[key] * 10}px`, 
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
