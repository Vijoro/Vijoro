import React from "react";
import styles from "./homepage.module.css";
import WordCube from "./components/WordCube";
import data from '@/utils/dummydata.json'

type Props = {
};


const HomePage = (props: Props) => {

  const pokemonName = data.pokemon[0].toLowerCase() || "";
  const characters = pokemonName.split("");

  return (
    <>
      <nav>
        <h1 className={styles.heading}>Hello world!</h1>
      </nav>
      <main>
        <div className={styles.cubeWrapper}>
          <WordCube data={characters}/>
        </div>
      </main>
    </>
  );
};

export default HomePage;
