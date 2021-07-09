import './Switch.css'

function Switch({setBinVal, binVal}) {
    return (
        <label className="switch">
            <input type="checkbox" onChange={setBinVal} checked={binVal} />
            <span className="slider"></span>
        </label>    
    )
}

export default Switch