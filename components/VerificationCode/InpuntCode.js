import React, { useState, useRef } from "react";

const InputCode = ({ length, loading, onComplete }) => {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef([]);
  // Typescript
  // useRef<(HTMLInputElement | null)[]>([])

  const processInput = (e, slot) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }
    if (newCode.every(num => num !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const onKeyUp = (e, slot) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };

  return (
    <div className="d-flex flex-column align-items-center code-inputs">
    <label className="mb-4">Introducir código</label>
    <div className="d-flex justify-content-start align-items-center">
      {code.map((num, idx) => {
        return (
          <input
            key={idx}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={num}
            autoFocus={!code[0].length && idx === 0}
            readOnly={loading}
            onChange={(e) => processInput(e, idx)}
            onKeyUp={(e) => onKeyUp(e, idx)}
            ref={(ref) => inputs.current.push(ref)}
            style={{
              marginRight: '15px',
              border: 'none',
              backgroundImage: 'none',
              backgroundColor: 'transparent',
              WebkitBoxShadow: 'none',
              MozBoxShadow: 'none',
              boxShadow: 'none',
              textAlign: 'center',
              height: '60px',
              width: '40px',
              borderRadius: '10px',
              margin: '0 4px',
              border: '2px solid #4f5b66',
              fontSize: '38px',
            }}
          />
        );
      })}
    </div>
  </div>
  );
};

export default InputCode;
