export const getHotPosts = async (subreddit) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json`);
    const data = await response.json();
    return data.data.children.map(child => child.data);
};
