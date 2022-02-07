import React from "react";

type Props = {
  titleText: string;
};
const Title: React.VFC<Props> = React.memo(({ titleText }) => {
  console.log("Title");
  return <div>{titleText}</div>;
});

export default Title;
