import styles from '/Button.modules.css'

export default function Button(){
  const styles = {
    background-color: "rgb(12, 122, 115)",
    color: "white",
    padding: "10px 20px",
    border-radius: "4px",
    border: "none",
    cursor: "pointer",
  }
  }
  return (<button className={styles}> Click me</button>)
}