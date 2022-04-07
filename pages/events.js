import { useState } from 'react'
import { useRouter } from 'next/router'

function EventList({eventList}) {

    const router = useRouter()
    const [events, setEvents] = useState(eventList)
    const fetchCategory1Events = async() => {
        const response = await fetch('http://localhost:4000/events?category=category1')
        const data = await response.json()
        setEvents(data)
        router.push('/events?category=category1', undefined, {shallow: true})

    }

    return <>
    <button onClick={fetchCategory1Events}>Category 1 Events</button>
    <h1>List of Events</h1>
    {
        events.map((event) => {
            return <div key={event.id}>
                <h2>{event.id} {event.title} {event.category}</h2>
                <p>{event.description}</p>
                <hr />
            </div>
        })
    }
    </>


}

export default EventList

export async function getServerSideProps(context) {
const { query } = context
const { category } = query
const queryString = category ? `category=${category}` : ''
const response = await fetch(`http://localhost:4000/events?${queryString}`)
const data = await response.json()

return {
    props :{
        eventList: data
    }
}



}