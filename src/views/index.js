import React from 'react'
import Header from 'components/header'
// import Footer from 'components/footer'
import Routes from 'router'

class App extends React.Component {
    render() {
        return <div className="app-container">
            <Header />
            <Routes />
            {/* <Footer /> */}
        </div>
    }
}

export default App;