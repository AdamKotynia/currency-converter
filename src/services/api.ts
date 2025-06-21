import axios from "axios";

// The token would never be here on production, this is purely for time and convenience.

export const api = axios.create({
  baseURL: "https://api.currencybeacon.com/v1/",
  headers: { Authorization: "Bearer CGG93JAerKVvF2w8TnFG5VtFr6GcYqJp" },
});
