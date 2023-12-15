import { Link } from 'react-router-dom'

const TopicCard = ({topic}) => {
    return (
        <li>
            <div className="p-2.5 border border-solid border-black m-2.5 rounded gap-0 text-center border-y bg-hue-card-bg">
                <h2 className="font-young underline text-hue-light">{topic.slug}</h2>
                <p>{topic.description}</p>
                <div className='m-4 rounded-full py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
      hover:-translate-y-0.5 active:translate-y-0
      bg-transparent dark:bg-transparent hover:bg-teal-600 border-2 border-teal-300
      hover:border-teal-600 dark:border-teal-600 dark:hover:border-teal-600 text-teal-600 hover:text-white dark:text-teal-600 dark:hover:bg-teal-600 dark:hover:text-white mx-1 md:mx-2 my-1 md:my-2'>
                    <Link to={`/articles?topic=` + topic.slug}>
                    <button >View articles on this topic</button>
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default TopicCard