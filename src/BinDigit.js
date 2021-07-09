import './BinDigit.css'
import Switch from './Switch.js'

function BinDigit ({binVal, setBinVal, expVal}) {
    return(
        <div className='ControlContainer'>
            <div className='binVal'>
                {binVal}
            </div>
            <Switch setBinVal={setBinVal} binVal={binVal} />
            <div>
                2<sup>{expVal}</sup>{expVal===0?'':'+'}
            </div>
        </div>
    )
}

export default BinDigit