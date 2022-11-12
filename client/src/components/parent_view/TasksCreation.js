import "../../stylesheets/parent/create_task.css";
import {
    Coin,
    Clock,
} from "../svg";
import apis from "../../api";
import { Link } from "react-router-dom";

const { Component } = require("react");

class ParentTasksCreate extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            description: "",
            coins: 0,
            child: "",
            status: "assigned",
            children: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/children")
            .then((res) => res.json())
            .then((res) => {
                this.setState({ children: res.data, child: res.data[0]._id });
            });
    }

    render() {
        var cards = [];

        for (var i = 0; i < 10; ++i) {
            cards.push(
                <div className="parent-task-card">
                    <h4>Wash the dog</h4>
                    <p>
                        Wash the dog with shampoo and conditioner and also feed
                        the dog.
                    </p>
                    <div className="task-footer">
                        <div className="task-time">
                            <img alt="img" src={Clock} />
                            <span>5pm</span>
                        </div>
                        <div className="task-cost">
                            <img  alt= "img" rc={Coin} />
                            <span>500</span>
                        </div>
                        <div className="task-buttons">
                            <button id="edit">Edit</button>
                            <button id="delete">Delete</button>
                        </div>
                    </div>
                </div>
            );
        }

        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;

            this.setState({ [name]: value });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            const picked = (({ name, description, coins, child, status }) => ({
                name,
                description,
                coins,
                child,
                status
            }))(this.state);
            picked["coins"] = Number(picked["coins"]);
            console.log(picked);
            apis.insertTask(picked)
                .then((window.location = "/parent/tasks"))
                .catch((err) => console.log(err));
        };
        const selectOptions = [];
        const { children } = this.state;

        children.forEach((child) => {
            selectOptions.push(<option value={child._id}>{child.name}</option>);
        });

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

                <div className="parent-task-create-container">
                    <h4>Create a new task</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <label>Child:</label>
                            <select name="child">{selectOptions}</select>
                        </div>

                        <div className="form-row">
                            <label>Name:</label>
                            <input
                                name="name"
                                onChange={handleChange}
                                type="text"
                                required
                            ></input>
                        </div>

                        <div className="form-row">
                            <label>Description:</label>
                            <textarea
                                name="description"
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div className="form-row">
                            <label>Coins:</label>
                            <input
                                type="number"
                                name="coins"
                                onChange={handleChange}
                                required
                            ></input>
                        </div>

                        <button type="submit">Create</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default ParentTasksCreate;
