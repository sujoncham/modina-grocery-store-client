import { useNavigate } from 'react-router-dom';
const Page404 = () => {
    const navigate = useNavigate();
    const handleBackToHome = ()=>{
            navigate('/');
    }
    return (
        <div className="grid place-content-center p-10">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/Kwbkw8J/page404.jpg" alt="Page404" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Page Not Found</h2>
                    <p>Please, check your internet connection or url!!</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleBackToHome} className="btn btn-primary">Back to Home</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page404;