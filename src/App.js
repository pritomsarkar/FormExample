import styles from './App.module.css';
import Forms from './component/utils/Forms/Forms';

function App() {
  return (
    <div className={styles.form_container}>
      <div className={styles.head}>
      <h1 className={styles.heading}>Ready to master the Skills that Drive Your Career?</h1>
      <img src="arc_underline.png" alt="" />
      <p className={styles.title}>Avail your free 1:1 mentorship session.</p>
      </div>
      <Forms />
    </div>
  );
}

export default App;
