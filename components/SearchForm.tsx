import React, { useState } from "react";

export const SearchForm = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClick = () => console.log(value);

  return (
    <div>
      <input
        data-testid="search-input"
        type="text"
        onChange={onChange}
        value={value}
      />
      <button data-testid="search-button" onClick={onClick}>
        search
      </button>
    </div>
  );
};
