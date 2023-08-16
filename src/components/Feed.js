import React from 'react';
import "./Feed.css"

const feedData=[
{
    id:1,
    profileImg: 'https://media.makeameme.org/created/click-the-link-778vu6.jpg',
    userName: 'jollynd',
    imageUrl: 'https://placekitten.com/300/200',
    caption: 'My cat #1'

},
{
    id:2,
    profileImg: 'https://media.makeameme.org/created/click-the-link-778vu6.jpg',
    userName: 'jollynd',
    imageUrl: 'https://placekitten.com/300/201',
    caption: 'May cat #2' 

},
{
    id: 3,
    profileImg: 'https://media.makeameme.org/created/click-the-link-778vu6.jpg',
    userName: 'jollynd',
    imageUrl: 'https://placekitten.com/300/202',
    caption: 'Cute kitten #3'
}
];

const Feed = () => {
    return (
        <div className="feed">
            <h1>Instgram Feed</h1>
            {feedData.map(post=> (
                <div className="post" key={post.id}>
                    <div className='userInfo'>
                    <img src={post.profileImg} alt={post.userName} className='profileImg'/>
                    <p className='username'>{post.userName}</p>
                    </div>
                    <img src={post.imageUrl} alt={post.caption} className='imageUrl'/>
                    <p className='caption'>{post.caption}</p>
                </div>
            ))}
        </div>
    );
}

export default Feed;