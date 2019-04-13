class HelloWorld extends React.Component {
    render() {
        return (
            <h1>Tjena planeten</h1>
        );
    }
}

function main() {
    var mainElement = document.querySelector("main");
    ReactDOM.render(<HelloWorld />, mainElement);
}

main();
