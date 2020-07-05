import React from 'react';
import ReactDOM from 'react-dom';

const Header = (
    <header>
        header
    </header>
)
const Header2 = function (props) {
    return (
        <header>
            header {props.name}
        </header>
    )
}
const Bottom = (
    <div>
        bottom
    </div>
)
const Bottom2 = function () {
    const [n, setN] = React.useState(0)
    return (
        <div>
            {n}
            <button onClick={function () {
                setN(n + 1)
            }}>+1</button>
        </div>
    )
}
class Bottom3 extends React.Component {
    render() {
        return (
            <div>bottom 3</div>
        )
    }
}

const div = (
    <div>
        {Header}
        {Header2({ name: 'jack' })}
        <Header2 name="frank" />
        <p>
            <span>hi</span>
        </p>
        <Bottom2 />
        <Bottom3 />
    </div>
)

console.log(div) // element  虚拟的 element


ReactDOM.render(div, document.getElementById('root'))
// document.body.appendChild(div)



