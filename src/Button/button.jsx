import styles from './button.module.css'

function Button(){
    const styles ={
        borderRadius: "4px",
        border: "2px solid black",
        cursor: "pointer",
        backgroundColor: "greenyellow",
        padding: "10px 20px",
    }
    
    return(
        <button style={styles}>Click me</button>
    );
}

export default Button