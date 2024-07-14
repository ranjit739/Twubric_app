import React from 'react';

const SortButtons = ({ onSort, onSortByDate, convertDateToUnixTimestamp, getToDate, sortOrder,getFromDate }) => {
    return (
        <div className="sort-buttons">
            <div>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th colSpan="4">Sort by</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h6 className='btn btn-primary' onClick={() => onSort('total')}>
                                    Twubric Score
                                    <span className="sort-icon">
                                        {sortOrder['total'] === 'asc' ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M7 14l5-5 5 5z" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M7 10l5 5 5-5z" />
                                            </svg>
                                        )}
                                    </span>
                                </h6>
                            </td>
                            <td>
                                <h6 className='btn btn-primary' onClick={() => onSort('friends')}>
                                    Friends
                                    <span className="sort-icon">
                                        {sortOrder['friends'] === 'asc' ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M7 14l5-5 5 5z" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M7 10l5 5 5-5z" />
                                            </svg>
                                        )}
                                    </span>
                                </h6>
                            </td>
                            <td>
                                <h6 className='btn btn-primary' onClick={() => onSort('influence')}>
                                    Influence
                                    <span className="sort-icon">
                                        {sortOrder['influence'] === 'asc' ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M7 14l5-5 5 5z" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M7 10l5 5 5-5z" />
                                            </svg>
                                        )}
                                    </span>
                                </h6>
                            </td>
                            <td>
                                <h6 className='btn btn-primary' onClick={() => onSort('chirpiness')}>
                                    Chirpiness
                                    <span className="sort-icon">
                                        {sortOrder['chirpiness'] === 'asc' ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M7 14l5-5 5 5z" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M7 10l5 5 5-5z" />
                                            </svg>
                                        )}
                                    </span>
                                </h6>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="styled-table">
                    <thead>
                        <tr>
                            <th colSpan="3">Joined Twitter between</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h6>Start Date</h6>
                                <input 
                                    type='date' 
                                    className='date-input' 
                                   
                                    onChange={(e) => getFromDate(e.target.value)} 
                                />
                            </td>
                            <td>
                                <h6>End Date</h6>
                                <input 
                                    type='date' 
                                    className='date-input' 
                                   
                                    onChange={(e) => getToDate(e.target.value)} 
                                />
                            </td>
                            <td>
                                <h6 className='btn btn-primary' onClick={() => onSortByDate('date')}>
                                    Submit
                                    <span className="sort-icon">
                                        {sortOrder['date'] === 'asc' ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M7 14l5-5 5 5z" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                                <path d="M7 10l5 5 5-5z" />
                                            </svg>
                                        )}
                                    </span>
                                </h6>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SortButtons
