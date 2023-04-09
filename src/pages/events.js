import React from 'react';
import './events.css';
import AppBar from '../components/AppBar.jsx';


function Events() {
    const pendingEvents = [
        {
            id: 1,
            name: 'Web Development Workshop',
            date: 'May 15, 2022',
            description: 'A workshop on front-end web development using ReactJS'
        },
        {
            id: 2,
            name: 'Hackathon',
            date: 'July 23, 2022',
            description: 'A 24-hour hackathon for developing innovative solutions'
        },
        {
            id: 3,
            name: 'Android App Development Workshop',
            date: 'August 10, 2022',
            description: 'A workshop on developing android applications'
        },
        {
            id: 4,
            name: 'Machine Learning Seminar',
            date: 'October 2, 2022',
            description: 'A seminar on machine learning and its applications'
        },
        {
            id: 5,
            name: 'Guest Speaker Session',
            date: 'November 7, 2022',
            description: 'A session by a renowned developer on emerging technologies'
        },
        {
            id: 6,
            name: 'Data Science Bootcamp',
            date: 'December 15, 2022',
            description: 'A bootcamp on data science and data analytics'
        },
        {
            id: 7,
            name: 'UI/UX Design Workshop',
            date: 'January 30, 2023',
            description: 'A workshop on creating user-friendly interfaces using Figma'
        },
        {
            id: 8,
            name: 'Cloud Computing Seminar',
            date: 'March 15, 2023',
            description: 'A seminar on cloud computing and its applications'
        },
        {
            id: 9,
            name: 'Blockchain Workshop',
            date: 'April 20, 2023',
            description: 'A workshop on creating decentralized applications using blockchain'
        },
        {
            id: 10,
            name: 'Cybersecurity Awareness Session',
            date: 'May 29, 2023',
            description: 'A session on cybersecurity awareness and best practices'
        }
    ];

    const completedEvents = [
        {
            id: 1,
            name: 'Web Development Workshop',
            date: 'January 15, 2022',
            description: 'A workshop on front-end web development using ReactJS'
        },
        {
            id: 2,
            name: 'Machine Learning Seminar',
            date: 'March 2, 2022',
            description: 'A seminar on machine learning and its applications'
        },
        {
            id: 3,
            name: 'Guest Speaker Session',
            date: 'April 7, 2022',
            description: 'A session by a renowned developer on emerging technologies'
        },
        {
            id: 4,
            name: 'UI/UX Design Workshop',
            date: 'June 30, 2022',
            description: 'A workshop on creating user-friendly interfaces using Figma'
        },
        {
            id: 5,
            name: 'Blockchain Workshop',
            date: 'August 20, 2022',
            description: 'A workshop on creating decentralized applications using blockchain'
        }
    ];

    return (
        <div className="events-container">
            <AppBar />
            <h1 className="events-heading">Events</h1>
                
            <div className='sections'>
                <div className="events-pending">
                    <h3 className="events-subheading">Pending Events</h3>

                    {pendingEvents.length > 0 ? (
                        <ul className="event-list">
                            {pendingEvents.map((event) => (
                                <li key={event.id} className="event-item">
                                    <h4 className="event-name">{event.name}</h4>
                                    <p className="event-date">{event.date}</p>
                                    <p className="event-description">{event.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="no-events-message">There are no pending events at this time.</p>
                    )}

                </div>

                <div className="events-completed">
                    <h3 className="events-subheading">Completed Events</h3>

                    {completedEvents.length > 0 ? (
                        <ul className="event-list">
                            {completedEvents.map((event) => (
                                <li key={event.id} className="event-item">
                                    <h4 className="event-name">{event.name}</h4>
                                    <p className="event-date">{event.date}</p>
                                    <p className="event-description">{event.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="no-events-message">There are no completed events at this time.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Events