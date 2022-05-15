import React from "react";

enum Sex {
  male = 0,
  female = 1,
  neutral = 2,
  NULL,
}

interface Props {
  text: string;
  id: number;
  fn: (x: string) => string;
  obj: {
    name: string;
    sex: Sex;
  };
}

const TextFieldTSX: React.FC<Props> = () => {
  return <></>;
};

export default TextFieldTSX;
