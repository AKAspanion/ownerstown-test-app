import { useEffect, useState } from "react";

import { fetchHero, fetchTimeout } from "../services";

export default function useHeroFetch(code) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hero, setHero] = useState("");

  useEffect(() => {
    setHero("");
    setError("");
    setLoading(true);
    (async function () {
      try {
        if (!code) throw new Error("No code found");
        // for showing animation
        await fetchTimeout(2000);

        const resp = await fetchHero(code);
        const {
          data: { heroes },
        } = await resp.json();

        const hero = heroes[0];

        if (hero) {
          setHero(hero);
        } else {
          setError("No hero found");
        }
      } catch (err) {
        setError("Use a code to call for a superhero");
      } finally {
        setLoading(false);
      }
    })();
  }, [code]);

  return { loading, hero, error };
}
