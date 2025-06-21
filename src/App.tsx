import { useState } from "react";
import "@/App.css";
import AmountInput from "@/components/AmountInput";
import CurrencySelect from "@/components/CurrencySelect";
import useCurrencies from "@/hooks/useCurrencies";
import useConversion from "@/hooks/useConversion";
import SwapButton from "@/components/SwapButton";
import ConversionResult from "./components/ConversionResult";

function App() {
  const [amount, setAmount] = useState<number>(0);
  const [from, setFrom] = useState<string>("USD");
  const [to, setTo] = useState<string>("EUR");
  const currencies = useCurrencies();
  const converted = useConversion(from, to, amount);

  return (
    <div className="app-container">
      <header>
        <h1>Currency Converter</h1>
      </header>

      <div className="controls">
        <div>
          <CurrencySelect
            value={from}
            label="From"
            options={currencies}
            onChange={setFrom}
          />
          <AmountInput value={amount} onChange={setAmount} />
        </div>
        <SwapButton
          onClick={() => {
            const temp = to;
            setTo(from);
            setFrom(temp);
            // this causes additional request but i like it more that way, i guess it depends on preference, you might not like it.
            setAmount(converted || 0);
          }}
        />
        <div>
          <CurrencySelect
            value={to}
            label="To"
            options={currencies}
            onChange={setTo}
          />
          <ConversionResult result={converted} />
        </div>
      </div>
    </div>
  );
}

export default App;
