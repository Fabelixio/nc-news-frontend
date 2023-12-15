import { useState, useEffect } from "react";
import TopicCard from '../cards/TopicCard'
import { getAllTopics } from '../../utils/api'
import Error from "../Error";


const TopicList = () => {
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getAllTopics()
        .then((topicArr) => {
            setTopics(topicArr)
            setIsLoading(false)
        })
        .catch(() => {
            setIsError(true)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) return <h2 className="font-young text-center">Loading...</h2>
    if(isError) return <Error message='Topic does not exist' />

    return (
        <section>
            <ul>
            {topics.map((topic) => {
            return <TopicCard key={topic.slug} topic={topic} />
        })}
            </ul>
        </section>
    )
}

export default TopicList