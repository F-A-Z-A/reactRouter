import { useEffect, useState } from "react";
import styles from "./Prices.module.css";
import { SneakersType } from "../State";
import { useSearchParams } from "react-router-dom";

type Props = {
  state: SneakersType[];
};
export const Prices = ({ state }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filteredSneakers, setFilteredSneakers] = useState<SneakersType[]>(state);

  function handleOnSale() {
    setSearchParams({ onSale: "true" });
  }

  function handleReset() {
    setSearchParams({});
  }

  useEffect(() => {
    if (searchParams.get("onSale") === "true") {
      setFilteredSneakers((prevState) => prevState.filter((s) => s.onSale));
    } else {
      setFilteredSneakers((prevState) => prevState);
    }
  }, [searchParams]);

  return (
    <div>
      <button onClick={handleOnSale} className={styles.buttonStyle}>
        On sale
      </button>
      <button onClick={handleReset} className={styles.buttonStyle}>
        Reset filter
      </button>

      <table className={styles.tableStyle}>
        <thead>
          <tr>
            <th className={styles.thStyle}>Manufacturer</th>
            <th className={styles.thStyle}>Name</th>
            <th className={styles.thStyle}>Price</th>
            <th className={styles.thStyle}>On Sale</th>
          </tr>
        </thead>
        <tbody>
          {filteredSneakers.map((sneaker, index) => (
            <tr key={index}>
              <td className={styles.tdStyle}>{sneaker.manufacturer}</td>
              <td className={styles.tdStyle}>{sneaker.name}</td>
              <td className={styles.tdStyle}>${sneaker.price}</td>
              <td className={styles.tdStyle}>{sneaker.onSale ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
