const Error =  (props) => {
    const { message } = props
    return (
        <div className="text-center font-young underline">
            <p>{message}</p>
        </div>
    )
}

 export default Error