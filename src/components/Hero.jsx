import React from "react";

function Hero({ name }) {
  if (!name) {
    return null;
  }
  const heroes = [
    "THOR",
    "HULK",
    "ROBIN",
    "FLASH",
    "BLADE",
    "BATMAN",
    "PHANTOM",
    "HELLBOY",
    "IRONMAN",
    "PUNISHER",
    "SUPERMAN",
    "SPIDERMAN",
    "BLACKWIDOW",
    "WOLVERINE",
    "GHOSTRIDER",
    "CAPTAINAMERICA",
  ].join("-");

  if (!heroes.includes(name.toUpperCase())) {
    return false;
  }
  return (
    <div className="hero-image">
      <img alt={name} width="80" src={`images/${name.toLowerCase()}.png`} />
    </div>
  );
}

export default Hero;
