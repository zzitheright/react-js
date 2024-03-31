import Comment from "../../comments/Comment"


function Home({ title, desc }) {
    return (
      <main>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Comment />
      </main>
    )
}

export default Home