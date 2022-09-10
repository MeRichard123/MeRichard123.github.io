import React, { useEffect, useState, ReactNode } from 'react'


interface User {
        name: string;
        username: string;
        twitter_username: string;
        github_username: string;
        website_url: string;
        profile_image: string;
        profile_image_90: string;
}

interface ApiResponseType {
        type_of: string;
        id: number;
        title: string;
        description: string;
        readable_publish_date: string;
        slug: string;
        path: string;
        url: string;
        comments_count: number;
        public_reactions_count: number;
        collection_id?: number;
        published_timestamp: Date;
        positive_reactions_count: number;
        cover_image: string;
        social_image: string;
        canonical_url: string;
        created_at: Date;
        edited_at?: Date;
        crossposted_at?: any;
        published_at: Date;
        last_comment_at: Date;
        reading_time_minutes: number;
        tag_list: string[];
        tags: string;
        user: User;
}
const BlogFeed = (): JSX.Element => {
    const [data, setData] = useState<ApiResponseType[]>([]);
    useEffect(() => {
        (async () => {
            const response = await fetch("https://dev.to/api/articles?username=merichard123")
            const responseData: ApiResponseType[] = await response.json();
            setData(responseData);
        })()
    }, [])
    return (
        <React.Fragment>
            {!data?.length && <h2 className="post-loader">Loading Posts....</h2>}
            {data?.map((post:ApiResponseType) => (
                <a href={post.url} target="_blank" rel="noreferrer noopener" key={post.id}>
                    <div className="blog">
                        <h2 className="blog__title">{post.title}</h2>
                        <h4 className="blog__date">{post.readable_publish_date}</h4>
                        <p className="blog__desc">{post.description}</p>
                        <div className="ui-tag__wrapper tags">
                            {post.tag_list.slice(0,2).map((tag:string) => (
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
