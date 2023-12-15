const Error =  (props) => {
    const { message } = props
    return (
        <div className="text-center font-young">
            <h2 className="font-young text-center underline">Something has gone wrong!</h2>
            <p>{message}</p>
        </div>
    )
}

 export default Error