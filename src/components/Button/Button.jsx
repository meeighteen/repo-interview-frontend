const Button = ({children, style, onClick}) => {

    return (
        <button onClick={onClick} style={style}>
            {children}
        </button>
    )
}

export default Button;