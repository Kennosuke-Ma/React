import styles from "./Button.module.css"

function Button(props) {

    // const { type, disabled, children, onClick } = props;
    const { type, disabled, onClick, children } = props;

    // const handleClick = () => {
    //     alert("test");
    // }



    return (
        <>
            {/* // <button type="button" onClick={handleClick}>
        //     click
        // </button> */}
            <button className={styles.button} type={type} disabled={disabled} onClick={onClick}>
                {children}
            </button>
        </>
    );
}

export default Button;