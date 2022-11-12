const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    return blogs.reduce((a, b) => a + b.likes, 0)
}

const favouriteBlog =  (blogs) => {
    let allLikes = blogs.map((blog) => blog.likes)
    return blogs.filter((blog) => blog.likes === Math.max(...allLikes))[0]
}   

const mostBlogs = (blogs) => {
    const details = {}
    let max_val = 0;
    let max_author = null;
    for (let item of blogs) {
        if (item.author in details) {
            details[item.author] += 1;
        } else {
            details[item.author] = 1;
        }
    }

    for (let item in details) {
        if (details[item] > max_val) {
            max_author = item;
            max_val = details[item];
        }
    }

    return { author: max_author, blogs: details[max_author] }
}

const mostLikes = (blogs) => {
    const details = {}
    let max_val = 0;
    let max_author = null;
    for (let item of blogs) {
        if (item.author in details) {
            details[item.author] += item.likes;
        } else {
            details[item.author] = item.likes;
        }
    }

    for (let item in details) {
        if (details[item] > max_val) {
            max_author = item;
            max_val = details[item];
        }
    }

    return { author: max_author, blogs: details[max_author] }
}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog,
    mostBlogs,
    mostLikes
} 