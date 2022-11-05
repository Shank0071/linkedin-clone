import './InputOptions.css'

function InputOptions({Icon, title, color}) {
  return (
    <div className='inputOption'>
        {<Icon className="icon" style={{color:color}}/>}
        <p>{title}</p>
    </div>
  )
}

export default InputOptions