import { api } from "@/services/api";
import { useEffect, useState } from "react";

interface CurrencyObject {
  short_code: string;
}

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState<string[]>([]);

  useEffect(() => {
    api.get("/currencies").then((res) => {
      setCurrencies(
        Object.values(res?.data as Record<string, CurrencyObject>).map(
          (currencyObject) => currencyObject.short_code
        )
      );
    });
  }, []);

  return currencies;
};

export default useCurrencies;
