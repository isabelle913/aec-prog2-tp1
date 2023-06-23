import React from "react";
import Card from "./card/Card";
import "./Pokemons.css";

import Pikachu from "../../assets/Pikachu.png";
import Butterfree from "../../assets/Butterfree.png";
import Clefable from "../../assets/Clefable.png";
import Rapidash from "../../assets/Rapidash.png";
import Dewgong from "../../assets/Dewgong.png";
import Exeggutor from "../../assets/Exeggutor.png";
import Kangaskhan from "../../assets/Kangaskhan.png";
import Raichu from "../../assets/Raichu.png";
import Melmetal from "../../assets/Melmetal.png";
import Muk from "../../assets/Muk.png";

const Pokemons = () => {
  // TODO titre de l'onglet
  // TODO favicon
  return (
    <>
      <div className="container">
        <h1>Pokemons</h1>
        <div className="section-card">
          <Card
            index={1}
            name="Pikachu"
            img={{
              src: Pikachu,
              alt: "Pikachu",
              loading: "lazy",
            }}
            type="Electrique"
            height="0.4m"
            weight="6kg"
          />
          <Card
            index={2}
            name="Butterfree"
            img={{
              src: Butterfree,
              alt: "Butterfree",
              loading: "lazy",
            }}
            type="Bug Flying"
            height="1.1m"
            weight="32kg"
          />
          <Card
            index={3}
            name="Clefable"
            img={{
              src: Clefable,
              alt: "Clefable",
              loading: "lazy",
            }}
            type="Fairy"
            height="1.3m"
            weight="40kg"
          />
          <Card
            index={4}
            name="Rapidash"
            img={{
              src: Rapidash,
              alt: "Rapidash",
              loading: "lazy",
            }}
            type="Fairy Psychic Fire"
            height="1.7m"
            weight="95kg"
          />
          <Card
            index={5}
            name="Dewgong"
            img={{
              src: Dewgong,
              alt: "Dewgong",
              loading: "lazy",
            }}
            type="Water Ice"
            height="1.7m"
            weight="120kg"
          />
          <Card
            index={6}
            name="Exeggutor"
            img={{
              src: Exeggutor,
              alt: "Exeggutor",
              loading: "lazy",
            }}
            type="Grass Psychic Dragon"
            height="2.0m"
            weight="120kg"
          />
          <Card
            index={7}
            name="Kangaskhan"
            img={{
              src: Kangaskhan,
              alt: "Kangaskhan",
              loading: "lazy",
            }}
            type="Normal"
            height="2.2m"
            weight="80kg"
          />
          <Card
            index={8}
            name="Raichu"
            img={{
              src: Raichu,
              alt: "Raichu",
              loading: "lazy",
            }}
            type="Electric Psychic"
            height="0.8m"
            weight="30kg"
          />
          <Card
            index={9}
            name="Melmetal"
            img={{
              src: Melmetal,
              alt: "Melmetal",
              loading: "lazy",
            }}
            type="Steel"
            height="2.5m"
            weight="800kg"
          />
          <Card
            index={10}
            name="Muk"
            img={{
              src: Muk,
              alt: "Muk",
              loading: "lazy",
            }}
            type="Poison Dark"
            height="1.2m"
            weight="30kg"
          />
        </div>
        <p className="footer">
          Réalisé par: Isabelle Langlois, Projet 1 - React, Techniques de
          programmation Web 2
        </p>
      </div>
    </>
  );
};

export default Pokemons;
