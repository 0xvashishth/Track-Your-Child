import * as React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/child_view/Home";
import Earn from "../components/child_view/Earn";
import Rewards from "../components/child_view/Rewards";
import Invest from "../components/child_view/Invest";
import ParentHome from "../components/parent_view/Home";
import ParentTasks from "../components/parent_view/Tasks";
import ParentRewards from "../components/parent_view/Rewards";
import ParentTasksCreate from "../components/parent_view/TasksCreation";
import ParentRewardCreate from "../components/parent_view/RewardCreation";
import ParentChildCreate from "../components/parent_view/ChildCreation";

function App() {
    // const finnhub = require('finnhub');

    // const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    // api_key.apiKey = "c7qobl2ad3ia6nr4s5o0"
    // const finnhubClient = new finnhub.DefaultApi()

    // finnhubClient.quote("AAPL", (error, data, response) => {
    //   console.log(data)
    // });

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/use" element={<Rewards />} />
            <Route path="/earn" element={<Earn />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/parent" element={<ParentHome />} />
            <Route path="/parent/tasks" element={<ParentTasks />} />
            <Route path="/parent/rewards" element={<ParentRewards />} />
            <Route
                path="/parent/tasks/create/"
                element={<ParentTasksCreate />}
            />
            <Route
                path="/parent/rewards/create/"
                element={<ParentRewardCreate />}
            />
            <Route
                path="/parent/child/create/"
                element={<ParentChildCreate />}
            />
        </Routes>
    );
}

export default App;
