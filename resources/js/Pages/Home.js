import Layout from "@/Layouts/Layout";
import { Head } from '@inertiajs/inertia-react'

const Home = (props) => {
    return (
        <>
        <Head title="Home" />
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>
            </div>
        </header>
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">HOME</div>
                </div>
            </div>
        </div>
        </>
    );
};

Home.layout = page => <Layout auth={page.props.auth} children={page} />

export default Home;
