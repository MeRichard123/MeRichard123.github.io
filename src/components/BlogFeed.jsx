import React, { useEffect, useState } from 'react'


const BlogFeed = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch("https://dev.to/api/articles?username=merichard123")
            const responseData = await response.json();
            setData(responseData);
        })()
    }, [])
    return (
        <React.Fragment>
            {!data?.length && <h2 className="post-loader">Loading Posts....</h2>}
            {data?.map((post) => (
                <a href={post.url} target="_blank" rel="noreferrer noopener" key={post.id}>
                    <div className="blog">
                        <h2 className="blog__title">{post.title}</h2>
                        <h4 className="blog__date">{post.readable_publish_date}</h4>
                        <p className="blog__desc">{post.description}</p>
                        <div className="ui-tag__wrapper tags">
                            {post.tag_list.slice(0,2).map((tag) => (
                                <div className="ui-tag" key={tag}>
                                    <span className="tag-title">{tag}</span>
                                </div>
                            ))}
                        </div>                
                    </div>
                </a>
            ))}  
        </React.Fragment>
    )
}
export default BlogFeed;
