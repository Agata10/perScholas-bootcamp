import { useState } from 'react';
const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [firstOper, setFirstOper] = useState(0);
  const [secOper, setSecOper] = useState(0);
  const [operator, setOperator] = useState('');
  const buttons = [
    [7, 8, 9, '/'],
    [4, 5, 6, 'x'],
    [1, 2, 3, '-'],
    [0, 'C', '+', '='],
  ];

  function calculate() {
    switch (operator) {
      case '/':
        if (secOper == 0) {
          return "Can't divide by 0";
        }
        return Number(firstOper) / Number(secOper);
      case 'x':
        return Number(firstOper) * Number(secOper);
      case '-':
        return Number(firstOper) - Number(secOper);
      case '+':
        return Number(firstOper) + Number(secOper);
    }
  }

  const handleClick = (e) => {
    setDisplayValue((prev) => prev + e.target.value);
    if (firstOper === 0) {
      setFirstOper(e.target.value);
    } else {
      setSecOper(e.target.value);
    }
    switch (e.target.value) {
      case '.':
        setFirstOper((prev) => prev + e.target.value);
        break;
      case '/':
        setOperator('/');
        break;
      case 'x':
        setOperator('x');
        break;
      case '-':
        setOperator('-');
        break;
      case '+':
        setOperator('+');
        break;
      case '=':
        setDisplayValue(calculate().toString());
        setFirstOper(calculate().toString());
        setOperator('');
        setSecOper(0);
        break;
      case 'C':
        setDisplayValue('');
        setFirstOper(0);
        setSecOper(0);
        setOperator('');
    }
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
