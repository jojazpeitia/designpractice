import styles from './styles.module.css'

export default function Design1() {

  const numberOfDots = 400;

  const dotElements = [];

  for (let i = 0; i < numberOfDots; i++) {
    dotElements.push(<div key={i} className={styles.dot} />);
  }

  return (
    <div>
      <h1 className="justify-center items-center flex mt-36">
        dot
      </h1>
      <div className='items-center justify-center flex'>
        <div className={`${styles.dots} scale-100`}>
          {dotElements}
        </div>
      </div>
    </div>
  );
}