import styles from './styles.module.css'

export default function Design1() {

  const numberOfDots = 400;

  const dotElements = [];

  for (let i = 0; i < numberOfDots; i++) {
    dotElements.push(<div key={i} className={styles.dot} />);
  }

  return (
    <div className=' min-h-screen items-center justify-center flex'>
      <div className={styles.dots}>
        {dotElements}
      </div>
    </div>
  );
}