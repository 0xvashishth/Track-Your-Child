import axios from 'axios'

const api = axios.create({
    baseURL: 'https://track-your-child.vashishth-patel.repl.co/api',
})

export const insertChild = payload => api.post(`/child`, payload)
export const deleteChildById = id => api.delete(`/child/${id}`)
export const getChildById = id => api.get(`/child/${id}`)
export const getAllChildren = () => api.get(`/children`)
export const updateChildCoins = payload => api.put(`child`, payload)
export const insertTask = payload => api.post('/task', payload)
export const insertReward = payload => api.post('/reward', payload)
export const getAllTask = () => api.get('/tasks')
export const getAllRewards = () => api.get('/rewards')
export const deleteTaskById = id => api.delete(`/task/${id}`)
export const deleteRewardById = id => api.delete(`/reward/${id}`)

export const getChildTasks = child => api.get(`/tasks/${child}`)
export const deleteTask = id => api.delete(`/task/${id}`)

export const getStocks = () => api.get(`/stocks`)

export const getShares = (child, stock) => api.get(`/shares/${child}/${stock}`)
export const getRewards = () => api.get(`/rewards`)
// need "reward", "child"
export const createRewardRequest = payload => api.post(`/reward-request`, payload)

const apis = {
    insertChild,
    deleteChildById,
    getChildById,
    getAllChildren,
    updateChildCoins,
    getRewards,
    createRewardRequest,
    insertTask,
    insertReward,
    getAllTask,
    getAllRewards,
    deleteRewardById,
    deleteTaskById,
    getChildTasks,
    deleteTask,
    getStocks,
    getShares
}

export default apis