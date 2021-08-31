const Post = (props) => {
    let { post } = props
    return ( <
        div >
        <
        p > Title: { post.title } < /p> <
        p > Body: { post.body } < /p> <
        br / >

        <
        /div>
    )


}
export default Post