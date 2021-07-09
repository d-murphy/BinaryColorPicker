import './Container.css'
import React, {useState} from 'react';
import BinDigit from './BinDigit.js'

var binaryLUs = {
    '0000': {
      decimalPos1Val: '0',
      decimalPos2Val: '0',
      Hexadecimal: '0'
    },
    '0001': {
      decimalPos1Val: '1',
      decimalPos2Val: '16',
      Hexadecimal: '1'
    },
    '0010': {
      decimalPos1Val: '2',
      decimalPos2Val: '32',
      Hexadecimal: '2'
    },
    '0011': {
      decimalPos1Val: '3',
      decimalPos2Val: '48',
      Hexadecimal: '3'
    },
    '0100': {
      decimalPos1Val: '4',
      decimalPos2Val: '64',
      Hexadecimal: '4'
    },
    '0101': {
      decimalPos1Val: '5',
      decimalPos2Val: '80',
      Hexadecimal: '5'
    },
    '0110': {
      decimalPos1Val: '6',
      decimalPos2Val: '96',
      Hexadecimal: '6'
    },
    '0111': {
      decimalPos1Val: '7',
      decimalPos2Val: '112',
      Hexadecimal: '7'
    },
    '1000': {
      decimalPos1Val: '8',
      decimalPos2Val: '128',
      Hexadecimal: '8'
    },
    '1001': {
      decimalPos1Val: '9',
      decimalPos2Val: '144',
      Hexadecimal: '9'
    },
    '1010': {
      decimalPos1Val: '10',
      decimalPos2Val: '160',
      Hexadecimal: 'A'
    },
    '1011': {
      decimalPos1Val: '11',
      decimalPos2Val: '176',
      Hexadecimal: 'B'
    },
    '1100': {
      decimalPos1Val: '12',
      decimalPos2Val: '192',
      Hexadecimal: 'C'
    },
    '1101': {
      decimalPos1Val: '13',
      decimalPos2Val: '208',
      Hexadecimal: 'D'
    },
    '1110': {
      decimalPos1Val: '14',
      decimalPos2Val: '224',
      Hexadecimal: 'E'
    },
    '1111': {
      decimalPos1Val: '15',
      decimalPos2Val: '240',
      Hexadecimal: 'F'
    }
  };
  
  function Container() {
  
    const [SwitchVal0_0, SetSwitchVal0_0] = useState(0)
    const [SwitchVal0_1, SetSwitchVal0_1] = useState(0)
    const [SwitchVal0_2, SetSwitchVal0_2] = useState(0)
    const [SwitchVal0_3, SetSwitchVal0_3] = useState(0)
    const [SwitchVal0_4, SetSwitchVal0_4] = useState(1)
    const [SwitchVal0_5, SetSwitchVal0_5] = useState(1)
    const [SwitchVal0_6, SetSwitchVal0_6] = useState(0)
    const [SwitchVal0_7, SetSwitchVal0_7] = useState(1)
    const [SwitchVal1_0, SetSwitchVal1_0] = useState(0)
    const [SwitchVal1_1, SetSwitchVal1_1] = useState(0)
    const [SwitchVal1_2, SetSwitchVal1_2] = useState(0)
    const [SwitchVal1_3, SetSwitchVal1_3] = useState(0)
    const [SwitchVal1_4, SetSwitchVal1_4] = useState(0)
    const [SwitchVal1_5, SetSwitchVal1_5] = useState(1)
    const [SwitchVal1_6, SetSwitchVal1_6] = useState(1)
    const [SwitchVal1_7, SetSwitchVal1_7] = useState(1)
    const [SwitchVal2_0, SetSwitchVal2_0] = useState(0)
    const [SwitchVal2_1, SetSwitchVal2_1] = useState(1)
    const [SwitchVal2_2, SetSwitchVal2_2] = useState(1)
    const [SwitchVal2_3, SetSwitchVal2_3] = useState(0)
    const [SwitchVal2_4, SetSwitchVal2_4] = useState(0)
    const [SwitchVal2_5, SetSwitchVal2_5] = useState(1)
    const [SwitchVal2_6, SetSwitchVal2_6] = useState(1)
    const [SwitchVal2_7, SetSwitchVal2_7] = useState(1)
  
    function getHex0_1() {
      return binaryLUs[`${String(SwitchVal0_7)}${String(SwitchVal0_6)}${String(SwitchVal0_5)}${String(SwitchVal0_4)}`].Hexadecimal;
    }
  
    function getHex0_0() {
      return binaryLUs[`${String(SwitchVal0_3)}${String(SwitchVal0_2)}${String(SwitchVal0_1)}${String(SwitchVal0_0)}`].Hexadecimal;
    }
  
    function getRVal() {
      return Number(binaryLUs[`${String(SwitchVal0_3)}${String(SwitchVal0_2)}${String(SwitchVal0_1)}${String(SwitchVal0_0)}`].decimalPos1Val) + Number(binaryLUs[`${String(SwitchVal0_7)}${String(SwitchVal0_6)}${String(SwitchVal0_5)}${String(SwitchVal0_4)}`].decimalPos2Val);
    }
  
    function getHex1_1() {
      return binaryLUs[`${String(SwitchVal1_7)}${String(SwitchVal1_6)}${String(SwitchVal1_5)}${String(SwitchVal1_4)}`].Hexadecimal;
    }
  
    function getHex1_0() {
      return binaryLUs[`${String(SwitchVal1_3)}${String(SwitchVal1_2)}${String(SwitchVal1_1)}${String(SwitchVal1_0)}`].Hexadecimal;
    }
  
    function getGVal() {
      return Number(binaryLUs[`${String(SwitchVal1_3)}${String(SwitchVal1_2)}${String(SwitchVal1_1)}${String(SwitchVal1_0)}`].decimalPos1Val) + Number(binaryLUs[`${String(SwitchVal1_7)}${String(SwitchVal1_6)}${String(SwitchVal1_5)}${String(SwitchVal1_4)}`].decimalPos2Val);
    }
  
    function getHex2_1() {
      return binaryLUs[`${String(SwitchVal2_7)}${String(SwitchVal2_6)}${String(SwitchVal2_5)}${String(SwitchVal2_4)}`].Hexadecimal;
    }
  
    function getHex2_0() {
      return binaryLUs[`${String(SwitchVal2_3)}${String(SwitchVal2_2)}${String(SwitchVal2_1)}${String(SwitchVal2_0)}`].Hexadecimal;
    }
  
    function getBVal() {
      return Number(binaryLUs[`${String(SwitchVal2_3)}${String(SwitchVal2_2)}${String(SwitchVal2_1)}${String(SwitchVal2_0)}`].decimalPos1Val) + Number(binaryLUs[`${String(SwitchVal2_7)}${String(SwitchVal2_6)}${String(SwitchVal2_5)}${String(SwitchVal2_4)}`].decimalPos2Val);
    }

    function getBackgroundColor() {
      return `rgb(${String(getRVal())},${String(getGVal())},${String(getBVal())})`
    }

    function changeTextColor() {
      if (getRVal()<192 && 
          getGVal()<192 &&
          getBVal()<192){
            return `rgb(255,255,255)`
          } else {
            return `rgb(0,0,0)`
          }
    }

    function changeLabelColor() {
      let are2ValsLight = 0;
      if (getRVal() > 106) are2ValsLight +=1
      if (getGVal() > 106) are2ValsLight +=1
      if (getBVal() > 106) are2ValsLight +=1

      if(are2ValsLight>1){
            return `rgb(70,70,70)`
          } else {
            return `rgb(136,136,136)`
          }
    }

    return(
        <div className='Background'>
          <div className='ColorDisplay' style={{backgroundColor: getBackgroundColor(), color: changeTextColor()}}>
            <div className="instructions">
              Use the binary controls to pick a color and explore the relationship between the Hex and RGB values
            </div>
            <div className="col-for-codes">
              <div className="hex-codes-wrapper">
                <div className="hex-codes-label" style={{color: changeLabelColor()}}>HEX #</div>
                <div className="hex-val hex-val1" >{getHex0_1()}</div>
                <div className="hex-val hex-val2" >{getHex0_0()}</div>
                <div className="hex-val hex-val3" >{getHex1_1()}</div>
                <div className="hex-val hex-val4" >{getHex1_0()}</div>
                <div className="hex-val hex-val5" >{getHex2_1()}</div>
                <div className="hex-val hex-val6" >{getHex2_0()}</div>
              </div>
              <div className="rgb-codes-wrapper">
                <div className="rgb-codes-label" style={{color: changeLabelColor()}}>RGB</div>
                <div className='rgb-val rgb-val1'>{getRVal()},</div>
                <div className='rgb-val rgb-val2'>{getGVal()},</div>
                <div className='rgb-val rgb-val3'>{getBVal()}</div>
              </div>
            </div>
          </div>
          <div className='Container'>
            <div className='Byte' id="ByteRed">
              <div className='Bits4ControlsContainer' id="Bits4Pos0_1">
                <BinDigit binVal={SwitchVal0_7} 
                          setBinVal = {() => SetSwitchVal0_7(prevState => prevState===0 ? 1 : 0)}
                          expVal={7} />
                <BinDigit binVal={SwitchVal0_6} 
                          setBinVal = {() => SetSwitchVal0_6(prevState => prevState===0 ? 1 : 0)}
                          expVal={6} />
                <BinDigit binVal={SwitchVal0_5} 
                          setBinVal = {() => SetSwitchVal0_5(prevState => prevState===0 ? 1 : 0)}
                          expVal={5} />
                <BinDigit binVal={SwitchVal0_4} 
                          setBinVal = {() => SetSwitchVal0_4(prevState => prevState===0 ? 1 : 0)}
                          expVal={4} />
              </div>
              <div className='Bits4ControlsContainer' id="Bits4Pos0_0">
                <BinDigit binVal={SwitchVal0_3} 
                          setBinVal = {() => SetSwitchVal0_3(prevState => prevState===0 ? 1 : 0)}
                          expVal={3} />
                <BinDigit binVal={SwitchVal0_2} 
                          setBinVal = {() => SetSwitchVal0_2(prevState => prevState===0 ? 1 : 0)}
                          expVal={2} />
                <BinDigit binVal={SwitchVal0_1} 
                          setBinVal = {() => SetSwitchVal0_1(prevState => prevState===0 ? 1 : 0)}
                          expVal={1} />
                <BinDigit binVal={SwitchVal0_0} 
                          setBinVal = {() => SetSwitchVal0_0(prevState => prevState===0 ? 1 : 0)}
                          expVal={0} />
              </div>
            </div>

            <div className='Byte' id="ByteGreen">
              <div className='Bits4ControlsContainer' id="Bits4Pos1_1">
                <BinDigit binVal={SwitchVal1_7} 
                          setBinVal = {() => SetSwitchVal1_7(prevState => prevState===0 ? 1 : 0)}
                          expVal={7} />
                <BinDigit binVal={SwitchVal1_6} 
                          setBinVal = {() => SetSwitchVal1_6(prevState => prevState===0 ? 1 : 0)}
                          expVal={6} />
                <BinDigit binVal={SwitchVal1_5} 
                          setBinVal = {() => SetSwitchVal1_5(prevState => prevState===0 ? 1 : 0)}
                          expVal={5} />
                <BinDigit binVal={SwitchVal1_4} 
                          setBinVal = {() => SetSwitchVal1_4(prevState => prevState===0 ? 1 : 0)}
                          expVal={4} />
              </div>
              <div className='Bits4ControlsContainer' id="Bits4Pos1_0">
                <BinDigit binVal={SwitchVal1_3} 
                          setBinVal = {() => SetSwitchVal1_3(prevState => prevState===0 ? 1 : 0)}
                          expVal={3} />
                <BinDigit binVal={SwitchVal1_2} 
                          setBinVal = {() => SetSwitchVal1_2(prevState => prevState===0 ? 1 : 0)}
                          expVal={2} />
                <BinDigit binVal={SwitchVal1_1} 
                          setBinVal = {() => SetSwitchVal1_1(prevState => prevState===0 ? 1 : 0)}
                          expVal={1} />
                <BinDigit binVal={SwitchVal1_0} 
                          setBinVal = {() => SetSwitchVal1_0(prevState => prevState===0 ? 1 : 0)}
                          expVal={0} />
              </div>
            </div>
            <div className='Byte' id="ByteBlue">
              <div className='Bits4ControlsContainer' id="Bits4Pos2_1">
                <BinDigit binVal={SwitchVal2_7} 
                          setBinVal = {() => SetSwitchVal2_7(prevState => prevState===0 ? 1 : 0)}
                          expVal={7} />
                <BinDigit binVal={SwitchVal2_6} 
                          setBinVal = {() => SetSwitchVal2_6(prevState => prevState===0 ? 1 : 0)}
                          expVal={6} />
                <BinDigit binVal={SwitchVal2_5} 
                          setBinVal = {() => SetSwitchVal2_5(prevState => prevState===0 ? 1 : 0)}
                          expVal={5} />
                <BinDigit binVal={SwitchVal2_4} 
                          setBinVal = {() => SetSwitchVal2_4(prevState => prevState===0 ? 1 : 0)}
                          expVal={4} />
              </div>
              <div className='Bits4ControlsContainer' id="Bits4Pos2_0">
                <BinDigit binVal={SwitchVal2_3} 
                          setBinVal = {() => SetSwitchVal2_3(prevState => prevState===0 ? 1 : 0)}
                          expVal={3} />
                <BinDigit binVal={SwitchVal2_2} 
                          setBinVal = {() => SetSwitchVal2_2(prevState => prevState===0 ? 1 : 0)}
                          expVal={2} />
                <BinDigit binVal={SwitchVal2_1} 
                          setBinVal = {() => SetSwitchVal2_1(prevState => prevState===0 ? 1 : 0)}
                          expVal={1} />
                <BinDigit binVal={SwitchVal2_0} 
                          setBinVal = {() => SetSwitchVal2_0(prevState => prevState===0 ? 1 : 0)}
                          expVal={0} />
              </div>
            </div>
          </div>
          <div className="by-line">
            <div>Made by <a href="https://github.com/d-murphy">Dan Murphy</a></div>
            <div className="credit-line">Inspiration credit to <a href="https://outofips.netlify.app/">Kat Huang</a></div>
          </div>
        </div>
    )
}

export default Container