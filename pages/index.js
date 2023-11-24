import Layout from "../components/Layout"
import HomepageIntro from "../components/HomePageIntro";
import SearchForm from "../components/SearchForm";

function HomePage() {
    return (
        <>
            <Layout>
                <HomepageIntro />
                <SearchForm />
            </Layout>
        </>
    );
};

export default HomePage;