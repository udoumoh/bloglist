const listHelper = require('../utils/list_helper')
const blog = require('../utils/blogsData')

test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1);
})

describe('total likes', () => {
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })
    test('of empty list is Zero', () => {
        const result = listHelper.totalLikes([])
        expect(result).toBe(0)
    })
    test('of a bigger list is calculated right', () => {
        const result = listHelper.totalLikes(blog)
        expect(result).toBe(36)
    })
})

describe('most likes', () => {
    const mostLiked = {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
    }
    test('of a bigger list, the most liked is returned', () => {
        const result = listHelper.favouriteBlog(blog)
        console.log(result);
        expect(result).toEqual(mostLiked)
    })
})

describe('most posts', () => {
    const mostPosts = { author: 'Robert C. Martin', blogs: 3 }
    test('of a big list, the author with the most posts is returned', () => {
        const result = listHelper.mostBlogs(blog)
        expect(result).toEqual(mostPosts)
    })
})

describe('most Likes', () => {
    const mostLiked = { author: 'Edsger W. Dijkstra', blogs: 17 }
    test('of a big list, the author with the most likes is returned', () => {
        const result = listHelper.mostLikes(blog)
        expect(result).toEqual(mostLiked)
    })
})