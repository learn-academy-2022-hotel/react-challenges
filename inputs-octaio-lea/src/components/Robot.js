const Robot = (props) => {
    return(
        <>
        <div>
        Good Robot: I hear you saying {props.userInput}, Is that correct?
        </div>
        <br />
        <div>
        Bad Robot: I hear you saying {props.userInput.forEach(letter => {}) * "BLABL"}
        </div>
        <br />
        <div>
        Kanyebot 5000: I'm gonna let you finish but Beyonce is {props.userInput}
        </div>

        </>
    )
}
export default Robot