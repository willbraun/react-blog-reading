const SidebarPost = ({title, body, selectPost}) => {
    return (
        <li className="sidebar-post">
            <h3 onClick={(e) => selectPost(e.target)}>{title}</h3>
        </li>
    )
}

export default SidebarPost;