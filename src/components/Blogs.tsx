import React, { useEffect, useState } from 'react'

interface Post {
    id: number;
    title: string;
    readable_publish_date: string;
    published_timestamp: string;
    description: string;
    tag_list: string[];
    url: string;
    draft?: boolean;
}

const BlogFeed = ({otherBlogs}: any) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch("https://dev.to/api/articles?username=merichard123")
            const responseData = await response.json();
            responseData.push(...Object.values(otherBlogs).map((blog: any) => ({
                id: blog.id,
                title: blog.frontmatter.title,
                published_timestamp: blog.frontmatter.date,
                readable_publish_date: blog.frontmatter.date,
                description: blog.frontmatter.description || '',
                tag_list: blog.frontmatter.tags || ["blog"],
                url: `/blog/${blog.frontmatter.url}`,
                draft: blog.frontmatter.draft || false
            })));
            responseData.sort((a: Post, b: Post) => new Date(b.published_timestamp).getTime() - new Date(a.published_timestamp).getTime());
            setData(responseData);
        })()
    }, [])
    return (
        <React.Fragment>
            {!data?.length && <h2 className="post-loader">Loading Posts....</h2>}
            <ol className="blog-list">
            {data?.filter((post: Post) => !post.draft).map((post: Post) => (
                <li className='blog-item' key={post.id}>
                <a href={post.url} target="_blank"
                className='blog-link'
                rel="noreferrer noopener">
                    <div className="blog">
                        <h2 className="blog__title">{post.title}</h2>
                        <div className="bottom">
                        <p className="blog__date">{post.readable_publish_date}</p>
                        <span className='divider'>|</span>
                        <div className="ui-tag__wrapper tags">
                            {post.tag_list.slice(0,2).map((tag) => (
                                <div className="ui-tag" key={tag}>
                                    <span className="tag-title">{tag},</span>
                                </div>
                            ))}
                            </div>
                        </div>                
                    </div>
                </a>
                </li>
            ))}  
            </ol>
        </React.Fragment>
    )
}
export default BlogFeed;