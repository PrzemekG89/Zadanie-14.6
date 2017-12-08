var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('Default values for properties');
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    reset: function() {
        this.setState({
            counter: 0
        });
    },

    componentWillMount: function() {
        console.log('Component will be rendered');
    },

    render: function() {
        return React.createElement('div', { className: 'counterButtons' },
            React.createElement('button', { className: 'btn btn-success', onClick: this.increment },
                React.createElement('span', {}, 'Licznik ' + this.state.counter),
            ), React.createElement('button', { className: 'btn btn-danger', onClick: this.decrement },
                React.createElement('span', {}, 'Licznik ' + this.state.counter),
            ), React.createElement('button', { className: 'reset btn btn-info', onClick: this.reset }, "Reset")
        );
    },

    componentDidMount: function() {
        console.log('Component was rendered');
    },

    componentWillReceiveProps: function() {
        console.log('New properties');
    },

    shouldComponentUpdate: function() {
        console.log('Component should be re-rendered?');
        return true;
    },

    componentWillUpdate: function() {
        console.log('Component will be re-rendered');
    },

    componentWillUpdate: function() {
        console.log('Component was re-rendered')
    },

    componentWillUnmount: function() {
        console.log('Component will be deleted')
    },
});

var Counters = React.createClass({
    render: function() {
        return React.createElement('div', { className: 'counters container' },
            React.createElement(Counter),
            React.createElement(Counter)
        )
    }
});

var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));