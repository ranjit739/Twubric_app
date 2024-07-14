import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FollowerList from '../component/followerList';
import SortButtons from '../component/SortButtons';
import './main.css';

function Main() {
    const [followers, setFollowers] = useState([]);
    const [filterFollowers, setfilterFollowers] = useState([]);
    const [sortOrder, setSortOrder] = useState({}); // To track the sort order for each criterion
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
const [loader,setLoader]=useState(false)
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setLoader(true)
        try {
            const res = await axios.get('https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json');
            if (res.status === 200) {
                
                setFollowers(res.data);
                setfilterFollowers(res.data)
                setLoader(false)
            } else {
                console.error(`Error: Received status code ${res.status}`);
                setLoader(false)

            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoader(false)

        }
    };

    const getFromDate = (dateString) => {
        setFromDate(dateString);
    };

    const getToDate = (dateString) => {
        setToDate(dateString);
    };

    const handleSort = (criteria) => {
        const order = sortOrder[criteria] === 'asc' ? 'desc' : 'asc';
        const sorted = [...followers].sort((a, b) => {
            const diff = a?.twubric[criteria] - b?.twubric[criteria];
            return order === 'asc' ? diff : -diff;
        });
        setFollowers(sorted);
        setSortOrder({ ...sortOrder, [criteria]: order });
    };

    const onSortByDate = () => {
        setFollowers(filterFollowers)
        if (fromDate && toDate) {
            const order = sortOrder['date'] === 'asc' ? 'desc' : 'asc';
            const from = new Date(fromDate);
            const to = new Date(toDate);

            const newList = followers.filter((element) => {
                const joinDate = new Date(element.join_date * 1000); // convert Unix timestamp to JavaScript Date
                return joinDate >= from && joinDate <= to;
            }).sort((a, b) => {
                const diff = new Date(a.join_date * 1000) - new Date(b.join_date * 1000);
                return order === 'asc' ? diff : -diff;
            });

            setFollowers(newList);
            setSortOrder({ ...sortOrder, date: order });
        }
    };

    return ( 
        <>
        <div className='container'>
            <SortButtons 
                onSort={handleSort} 
                onSortByDate={onSortByDate} 
                getFromDate={getFromDate} 
                getToDate={getToDate} 
                sortOrder={sortOrder} 
            />
            {loader ? <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>:<FollowerList follower={followers} setFollowers={setFollowers} />}
          </div>
        </>
    );
}

export default Main;
