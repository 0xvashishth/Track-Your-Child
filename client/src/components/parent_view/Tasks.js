import "../../stylesheets/parent/tasks.css";
import {
    Coin,
    Clock,
} from "../svg";
import { Link } from "react-router-dom";
import apis from '../../api'

const { Component } = require("react");

class ParentTasks extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            children: [],
            selectedChild: '',
        };
    }

    componentDidMount() {
        this.getTasks();    
        this.getChildren();
    }

    getChildren() {
        fetch("http://localhost:3001/api/children")
            .then((res) => res.json())
            .then((res) => {
                this.setState({ children: res.data, selectedChild: res.data[0]._id });
            });
    }

    getTasks() {
        apis.getAllTask().then((res) =>
            this.setState({ tasks: res.data.data })
        );
    }

    render() {
        const { tasks, children, selectedChild } = this.state;

        var cards = [];

        tasks.forEach((task) => {
            if(task.child === selectedChild)
            cards.push(
                <div className="parent-task-card">
                    <h4>{task.name}</h4>
                    <p>{task.description}</p>

                    <div className="task-footer">
                        <div className="task-time">
                            <img alt="img" src={Clock} />
                            <span>5pm</span>
                        </div>
                        <div className="task-cost">
                            <img alt="img" src={Coin} />
                            <span>{task.coins}</span>
                        </div>
                        <div className="task-buttons">
                            <button id="edit">Edit</button>
                            <button
                                id="delete"
                                onClick={async () => {
                                    if (
                                        window.confirm(
                                            `Delete ${task.name}?`
                                        ) === true
                                    ) {
                                        await apis.deleteTaskById(task._id);
                                        this.getTasks();
                                    }
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            );
        });

        console.log(cards.length)

        if(cards.length === 0) {
            cards.push(
                <div className="parent-task-card">
                    <h4>No Tasks Assigned!</h4>
                    <p>Assign this child a new task!</p>
                    <div className="task-footer">
                        <div className="task-buttons">
                        </div>
                    </div>
                </div>
            )
        }

        const childOpt = []
        children.forEach(child => {
            childOpt.push(
                <option value={child._id}>{child.name}</option>
            )
        })

        return (
            <div className="parent-main-container">
                <div className="navbar">
                    <h4 className="title">TrackYourChild</h4>
                    <ul className="tabs">
                        <Link to="/parent">
                            <li>Children</li>
                        </Link>
                        <Link to="/parent/tasks">
                            <li>Tasks</li>
                        </Link>
                        <Link to="/parent/rewards">
                            <li>Rewards</li>
                        </Link>
                    </ul>
                    <div className="navbar-footer">
                        Copyright © 2022
                        <br />
                        TrackYourChild
                    </div>
                </div>

                <div className="parent-task-sub-container">
                    <div className="child-selector">
                        <h4>Child:</h4>
                        <select onChange={(e) => {
                            this.setState({selectedChild: e.target.value})
                        }}>
                            {childOpt}
                        </select>
                    </div>
                    <div className="task-header">
                        <h4>Tasks:</h4>
                        <Link to="/parent/tasks/create">
                            <button>Add</button>
                        </Link>
                    </div>
                    <div className="parent-task-card-container">{cards}</div>
                </div>
            </div>
        );
    }
}
export default ParentTasks;
