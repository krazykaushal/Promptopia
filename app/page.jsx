import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden text-center" />
        <span className="orange_gradient text-center"> AI-Powered Propmts</span>
        </h1>
        <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quidem error unde ea amet suscipit aliquam consequuntur, totam et! Excepturi labore amet ab sint? Eius necessitatibus laborum quis libero reprehenderit!
        </p>

        {/* Feed */}
        <Feed />
    </section>
  )
}

export default Home