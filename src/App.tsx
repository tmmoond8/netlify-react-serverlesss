import React from 'react';
import Home from './pages/Home';
import About from './pages/About';

class App extends React.Component<{page: string}> {
  state = {
    page: this.props.page,
  };

  componentDidMount() {
    window.onpopstate = event => {
      this.setState({ page: event.state });
    };
  }

  onChangePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const page = (e.target as HTMLButtonElement).dataset?.page;
    window.history.pushState(page, '', page);
    this.setState({ page });
  };

  render() {
    const { page } = this.state;
    const PageComponent = page === '/about' ? About : Home;
    return (
      <div className="container">
        <button data-page="/home" onClick={this.onChangePage}>
          Home
        </button>
        <button data-page="/about" onClick={this.onChangePage}>
          About
        </button>
        <PageComponent />
      </div>
    )
  }
}

export default App;