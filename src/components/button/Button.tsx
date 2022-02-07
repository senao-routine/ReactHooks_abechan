import React from "react";
import classes from "./Button.module.scss";

type Props = {
  buttonText: string;
  onClick: () => void;
};

//React.memoでラップすることでButtonコンポーネントに渡ることでPropsに変更がない場合には再レンダリングされない
//React .memoでPropsの前後の値を比較してレンダリングするか決定する
const Button: React.VFC<Props> = React.memo(({ buttonText, onClick }) => {
  console.log(`Button:${buttonText}`);

  return (
    <div className={classes.root}>
      <button onClick={onClick} type="button" className={classes.button}>
        {buttonText}
      </button>
    </div>
  );
});

export default Button;
