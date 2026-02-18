function Button({text, color}) {
  return (
    <div>
      <button className="header-button" style={{backgroundColor: color}}>
        {text}
      </button>
    </div>
  )
}

export default Button