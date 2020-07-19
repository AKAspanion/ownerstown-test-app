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
        if (!code)
          throw new Error("Use the secret code to call for a superhero");
        // for showing animation
        await fetchTimeout(1000);

        const resp = await fetchHero(code);
        const data = await resp.json();

        if (!data.success) {
          throw new Error(data.error);
        }

        const hero = data.data.heroes[0];

        if (hero) {
          setHero(hero + " ANSWERED");
        } else {
          setError("No hero found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [code]);

  return { loading, hero, error };
}
