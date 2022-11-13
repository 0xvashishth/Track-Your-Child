import '../../stylesheets/child/earn.css'
import { Coin,Stock } from "../svg"
import apis from '../../api'
import { Link } from 'react-router-dom'

const { Component } = require("react");

class Earn extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            child: {}
        }
    }

    componentDidMount = async () => {
        await apis.getChildTasks("636f37e2484eeae6e3b92bd1")
                .then((res) => this.setState({tasks: res.data.data}))
                .catch((err) => console.log(err));

        await apis.getChildById("636f37e2484eeae6e3b92bd1")
                .then((res) => this.setState({child: res.data.data}))
                .catch((err) => console.log(err))
    }


    render() {
        const child = this.state.child
        const tasks = this.state.tasks
        const to_do = []
        const pending = []
        const completed = []
        tasks.forEach(task => {
            if (task.status === "assigned") {
                to_do.push(<div><li>{task.name}-{task.coins}</li><button id="edit"
                onClick={async () => {
                    if (
                        window.confirm(
                            `Do you want to make is completed? ${task.name}?`
                        ) === true
                    ) {
                        await apis.updateTaskStatus(task._id, "complete");
                        this.getTasks();
                    }
                }}
            >Mark As Completed</button></div>)
            }
            else if (task.status === "completed") {
                pending.push(<li>{task.name}-{task.coins}</li>)
            }
            else if (task.status === "accepted") {
                completed.push(<li>{task.name}-{task.coins}</li>)
            }
        })
        return(
        <div className="main-container">
            <Link to='/'><h4 className="title">TrackYourChild</h4></Link>
            <div className='stat'>
                <img alt="img" src={Coin}/><h4>{child.coins}</h4>
                <img alt="img" src={Stock}/><h4>+50</h4>
            </div>
            <h3 style={{color: 'var(--main2)'}}>Earn Coins</h3>
            <div className='lists-sub-container'>
                <div className='list'>
                    <h4>Tasks To Do</h4>
                    <ul>
                        {to_do}
                    </ul>
                </div>
                <div className='list'>
                    <h4>Tasks Completed</h4>
                    <ul>
                        {/* probably style differently */}
                        Pending to accept!
                        {pending}
                        <li>-----</li>
                        Accepted!
                        {completed}
                    </ul>
                </div>
            </div>
        </div>
    )}
}
export default Earn;