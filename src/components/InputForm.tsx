import React, { useState } from "react";

const InputForm: React.VFC = () => {
  //const [name, setName] = useState({ first: "", last: "" });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <div>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <p>
        {firstName}
        {lastName}
      </p>
    </div>
  );
};

export default InputForm;
