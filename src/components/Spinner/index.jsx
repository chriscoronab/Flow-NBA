import CircularProgress from "@mui/joy/CircularProgress";
import styles from "./spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.spinner}> 
      <CircularProgress /> 
    </div>
  );
};