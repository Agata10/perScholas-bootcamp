import { useState } from 'react';
const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const buttons = [
    ['BACK <-', 'RESET'],
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '-'],
    [0, '.', '+', '='],
  ];

  const handleClick = (e) => {
    switch (e.target.value) {
      case '=':
        try {
          console.log(displayValue);
          if (
            displayValue.toString().split('/').length - 1 > 1 ||
            displayValue.toString().split('+').length - 1 > 1 ||
            displayValue.toString().split('-').length - 1 > 1
          ) {
            throw new Error("Can't have many operators");
          }
          if (displayValue.toString().split('/').length - 1 === 1) {
            console.log(displayValue.slice(0, -1));
            if (displayValue.slice(-1) === '0') {
              throw new Error("Can't divde by 0");
            }
          }
          setDisplayValue(eval(displayValue).toString());
        } catch (err) {
          setDisplayValue(err.message);
        }
        return;
      case 'RESET':
        setDisplayValue('');
        return;
      case 'BACK <-':
        setDisplayValue((prev) => prev.slice(0, -1));
        return;
    }
    setDisplayValue((prev) => prev + e.target.value);
  };
  return (
    <div className="calculator-wrapper">
      <div
        style={{
          border: '1px solid black',
          height: '40px',
          borderRadius: '8px',
        }}
      >
        {displayValue}
      </div>
      {buttons.map((row) => {
        return (
          <div key={row}>
            {row.map((btn) => (
              <button key={btn} value={btn} onClick={handleClick}>
                {btn}
              </button>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Calculator;
