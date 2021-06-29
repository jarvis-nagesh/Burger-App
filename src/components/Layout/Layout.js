import React, { Component } from "react"
// import cls from "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/toolbar"
import SideDrawer from "../Navigation/SideDrawer/sideDrawer"


class Layout extends Component {
    state = {
        showSidedrawer: false
    }

    sidedrawerClosed = () => {
        this.setState({ showSidedrawer: false })
    }

    sideDrawerOpen = () => {
        this.setState({ showSidedrawer: true })
    }

    render() {
        return <>
            <div>
                <Toolbar showDrawer={this.sideDrawerOpen} />
                <SideDrawer open={this.state.showSidedrawer} closed={this.sidedrawerClosed} />
                <main>
                    {this.props.children}
                </main>
            </div>
        </>

    }
}


export default Layout;