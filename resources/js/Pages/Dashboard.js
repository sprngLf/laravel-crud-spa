import Layout from "@/Layouts/Layout";
import { Head } from '@inertiajs/inertia-react'

const Dashboard = () => {
    return (
        <>
        <Head title="Dashboard" />
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
            </div>
        </header>
        <div className="py-12 px-10">
            <p className="text-lg font-semibold">You are logged in!</p>
        </div>
        </>
    );
};

Dashboard.layout = page => <Layout auth={page.props.auth} children={page} />

export default Dashboard;

