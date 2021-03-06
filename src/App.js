import React,{useState} from 'react';
import useFetchJobs from './hooks/useFetchJobs';
import {Container} from 'react-bootstrap';
import Job from './Job';
import JobsPagination from './JobsPagination';

function App() {
  const[params,setParams] = useState({});
  const[page, setPage] = useState(1);
  const{jobs,loading,error,hasNextPage} = useFetchJobs(params,page);

  return (
    <Container className='my-4'>
      <h1 className="mb-4">Github jobs</h1>
      <JobsPagination page={page} hasNextPage={true} setPage={setPage} />
      {loading && <h1>Loading..</h1>}
      {error && <h1>Error. Try refreshing</h1>}
      {jobs.map(job=>{
        return <Job key={job.id} job={job}/>
      })}
      <JobsPagination page={page} hasNextPage={hasNextPage} setPage={setPage} />
    </Container>
      
  );
}

export default App;
