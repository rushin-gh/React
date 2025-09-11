import React from 'react';

class UserClassComp extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            count: 0
        }
    }

    render() {
        const { name } = this.props;
        const { count } = this.state;


        return (
            <div>
                <h1>{name}</h1>
                <h2>Software Developer</h2>
                <h3>rushi@gmail.com</h3>
                <h3>23, Male</h3>
                <h3>{count}</h3>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>CountInc</button>
            </div>
        );
    }
}

export default UserClassComp;