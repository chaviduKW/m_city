import AdminLayout from "../../Hoc/AdminLayout";

const Dashboard = (props:any)=>{
    console.log(props);

    return(
        <AdminLayout title="Dashboard">
            <div className="user_dashboard">
                <div>
                    this is your dashboard
                </div>
            </div>
        </AdminLayout>
    )
}

export default Dashboard;