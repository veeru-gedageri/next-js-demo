import Link from "next/link"

function ListPosts({posts}) {
    return <>
    <h1>Posts</h1>
    {
        posts.map((post) => {
            return (
                <div key={post.id}>
                    <Link href={`posts/${post.id}`} passHref>
                    <h2>
                        {post.id} {post.title}
                    </h2>
                    </Link>
                <hr/>
                </div>
            )
        })
    }
    </>
}

export default ListPosts

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts : data
        }
    }

}