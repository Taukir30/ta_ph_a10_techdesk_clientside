import { Link } from 'react-router';

import Loading from '../Loading/Loading';
import JobCard from '../JobCard/JobCard';

const JobContainer = ({jobs}) => {

    // const [latestJobs, setLatestJobs] = useState([]);
    // const [loading, setLoading] = useState(true);

    // const axiosInstance = useAxios();

    // useEffect(() => {
    //     setLoading(true);

    //     axiosInstance.get('/latest-jobs')
    //         .then(data => {
    //             // console.log(data.data)
    //             setLatestJobs(data.data);
    //             setLoading(false);
    //         })
    // }, [axiosInstance])

    // // console.log(latestJobs)

    // if (loading) {
    //     return <Loading></Loading>
    // }

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">

                {/* Job card */}
                {
                    jobs.map( job => <JobCard key={job._id} job={job}></JobCard>)
                }

            </div>
        </div>
    );
};

export default JobContainer;