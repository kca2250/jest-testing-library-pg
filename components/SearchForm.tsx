import React, { useState } from "react";

type SearchFormProps = {
  onSubmit: (value: string) => void;
};

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    if (value) {
      onSubmit(value);
    } else {
      console.log("入力フォームが空です");
    }
  };

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
