

const BadBot = (props) => {
    // console.log(props.name);

    // let badBotArr = (props.name).split("")
    // console.log(badBotArr);
    // let badBotSays = badBotArr.map(value => 'z')
    // console.log(badBotSays);
    // let finalSaying = badBotSays.join("")

    return(
        <>
        {props.name && <p>You are saying, '{'z'.repeat(props.name.length)}', right?</p>}
        </>
    )
}

export default BadBot