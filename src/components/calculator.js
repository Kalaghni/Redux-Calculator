import React, {Component} from 'react';
import NumberButton from './numberButton';
import { MainScreen } from './mainScreen';
import { BackButton } from './backButton';
import { EqualsButton } from './equalsButton';
import { SqrtButton } from './sqrtButton';
import { ClearButton } from './clearButton';
import { SymbolButton } from './symbolButton';
import { NegativeButton } from './negativeButton';
import { PowerButton } from './powerButton';

class Calculator extends Component {


    render() {
        return (
            <div className='number-panel'>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={6}><MainScreen/></td>
                        </tr>
                        <tr>
                            <td><ClearButton/></td>
                            <td><NegativeButton/></td>
                            <td><SymbolButton name="%" value="%"/></td>
                            <td></td>
                            <td><SymbolButton name="+" value="+"/></td>
                            <td><SymbolButton name="-" value="-"/></td>
                        </tr>
                        <tr>
                            <td><NumberButton name="1"/></td>
                            <td><NumberButton name="2"/></td>
                            <td><NumberButton name="3"/></td>
                            <td>&ensp;</td>
                            <td><SymbolButton name="÷" value="/"/></td>
                            <td><SymbolButton name="x" value="*"/></td>
                        </tr>
                        <tr>
                            <td><NumberButton name="4"/></td>
                            <td><NumberButton name="5"/></td>
                            <td><NumberButton name="6"/></td>
                            <td>&ensp;</td>
                            <td><PowerButton/></td>
                            <td><SqrtButton /></td>
                        </tr>
                        <tr>
                            <td><NumberButton name="7"/></td>
                            <td><NumberButton name="8"/></td>
                            <td><NumberButton name="9"/></td>
                            <td>&ensp;</td>
                            <td rowSpan={2} colSpan={2}></td>
                        </tr>
                        <tr>
                            <td><BackButton/></td>
                            <td><NumberButton name="0"/></td>
                            <td><EqualsButton/></td>
                            <td>&ensp;</td>
                        </tr>
                    </tbody>
                </table>
                    
        </div>
        );
    }
}

export default Calculator;