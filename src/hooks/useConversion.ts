import { api } from "@/services/api";
import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

const useConversion = (from: string, to: string, amount: number) => {
  const [convertedValue, setConvertedValue] = useState<number | null>(null);

  const debouncedAmount = useDebounce(amount, 500);

  useEffect(() => {
    if (!debouncedAmount) return;
    api
      .get("/convert", { params: { from, to, amount: debouncedAmount } })
      .then((res) => {
        setConvertedValue(res?.data?.value.toFixed(2));
      });
  }, [from, to, debouncedAmount]);

  return convertedValue;
};

export default useConversion;
