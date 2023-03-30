import useSWR from "swr";
import fetcher from "./fetcher";

const API_ENDPOINT = "http://localhost:4001";

const useApi = <T = any>(path: string) => {
  const { data, error, mutate } = useSWR<T>(API_ENDPOINT + path, fetcher);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;
  const notFound = error && error.status === 404;
  const badRequest = error && error.status === 400;

  const post = (data: Record<string, any>) => {
    return fetcher(API_ENDPOINT + path, {
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    });
  };

  return {
    loading,
    loggedOut,
    notFound,
    badRequest,
    mutate,
    data,
    post,
  };
};

export default useApi;
