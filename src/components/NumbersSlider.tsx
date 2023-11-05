import styles from "./NumbersSlider.module.css";

export default function NumbersSlider({ number }: { number: number }) {
  return (
    <h1 className={styles.wrapper}>
      {number
        .toString()
        .split("")
        .map((char, i) => (
          <div key={`char-${i}`} className={styles.character}>
            <div
              className={styles.inner}
              style={{
                transform: `translateY(calc(-${char}em))`,
              }}
            >
              {Array.from({ length: 10 }).map((_, j) => (
                <span key={`char-${i}-${j}`}>{j}</span>
              ))}
            </div>
          </div>
        ))}
    </h1>
  );
}
