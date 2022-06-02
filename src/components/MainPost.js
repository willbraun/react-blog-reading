const MainPost = ({title, body}) => {
    return (
        <main className="main-post">
            <div className="post-wrapper">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </main>
    )
}

export default MainPost;