
import Feed from "@/components/Feed"  

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover and share
            <br/>
            <span className="orange_gradient text-center">AI powered prompts</span>
        </h1>
        <p className="desc text-center">Promptopia is an opensource AI prompting tool for modern world. </p>
        <Feed/>
    </section>

  )
}

export default Home 