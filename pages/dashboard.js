import {useState, useEffect} from 'react'

function Dashboard(){
    const [isLoading,setIsLoading] = useState(true)
    const [dashBoarddata, setDashboardData] = useState(null)

    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch('http://localhost:4000/dashboard')
            const data = await response.json()
            setDashboardData(data)
            setIsLoading(false)
        }
        fetchDashboardData()
    },[])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts : {dashBoarddata.posts}</h2>
            <h2>Likes : {dashBoarddata.likes}</h2>
            <h2>Followers : {dashBoarddata.followers}</h2>
            <h2>Following : {dashBoarddata.following}</h2>
        </div>
    )

}

export default Dashboard