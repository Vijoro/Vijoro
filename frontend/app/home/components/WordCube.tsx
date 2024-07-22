import React from "react";
import styles from "../homepage.module.css";
type Props = {
  data: string[];
};

const WordCube = (props: Props) => {
  return (
    <>
      {props.data.map((data, index) => (
        <div key={index} className={styles.cube}>
          {data}
        </div>
      ))}
    </>
  );
};

export default WordCube;
