import { useEffect, useState } from "react";

/**
 * Fetch Hook Örneğidir.
 *
 * @param {string}  url Backend te tetiklenecek olan action mathodu url adresi.
 *
 * @example
 *
 * const [response, loding, error] = useFetch({url:});
 */
const useFetch = (config) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    fetch(config)
      .then((res) => {
        return res.json();
      })
      .then(data => {
        setResponse(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return [response, loading, error];
};

export default useFetch;