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

  const parsedName = name.toUpperCase().replace("ANSWERED", "").trim();

  if (!heroes.includes(parsedName)) {
    return false;
  }
  return (
    <div className="hero-image">
      <img
        alt={name}
        width="80"
        src={`images/${parsedName.toLowerCase()}.png`}
      />
    </div>
  );
}

export default Hero;
