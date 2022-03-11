import { Component } from "react"

export default class Fave extends Component {
    state = {
        isFave: false
    }
    handleClick = (e) => {
        console.log('fave has been clicked')
        e.stopPropagation()
        this.setState((prevState)=>{ return {isFave: !prevState.isFave} })
    }
    render() {
        return (
            <div className={`film-row-fave ${this.state.isFave ? "remove_from_queue" : "add_to_queue"}`} onClick={this.handleClick}>
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}
