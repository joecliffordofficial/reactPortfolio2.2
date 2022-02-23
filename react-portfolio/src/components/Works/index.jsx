import './style.css'
import { Button, Card } from "react-bootstrap"


export const Works = () => {

    // const cardInfo = () => [
    //     {
    //         title: "Book Search Engine",
    //         text: "This is an app that uses the Google Books API. You can login or signup, search for your favorite books, store them in a list, and delete ones you no longer want!",
    //         link: "https://book-search-engine-mern-jc.herokuapp.com/"
    //     },
    //     {
    //         title: "Tech Blog",
    //         text: "This is a place where you can login or signup and interact with blog posts! Leave others comments or post something totally new!",
    //         link: "https://tech-blog-jc.herokuapp.com/"
    //     },
    //     {
    //         title: "Weather Dashboard",
    //         text: "We always have to be prepared for the weather, and what better way than to seach your favorite locations and see what it looks like there! Just simply search and the app will do the rest!",
    //         link: "https://joecliffordofficial.github.io/weather_forcast/"
    //     },
    //     {
    //         title: "Quiz Game",
    //         text: "Think you know your coding stuff? Test yourself on the Quiz Game! Keep track of your top scores, but keep in mind one wrong question will set you back 10 seconds, so better brush up before trying!",
    //         link: "https://joecliffordofficial.github.io/quiz_game_hw4/"
    //     },
    //     {
    //         title: "Social Network API",
    //         text: "An entierly backend project where you can add, delete, update, or see all users. YOu can also generate Thoughts where you can again add, update, delete, and see all the Thoughts. Check out the repo below and install to your local machine!",
    //         link: "https://github.com/joecliffordofficial/socialNetworkAPI"
    //     },
    //     {
    //         title: "Employee Tracker",
    //         text: "An entirely backend piece where you can use your terminal to keep track of employees! Define if they are a Manager, Engineer, Accountant, or much more! Add, update, remove anyone you'd like in this interactive terminal tracker. Check out the repo below and install to your local machine!",
    //         link: "https://github.com/joecliffordofficial/employee_tracker"
    //     }
    // ];

    // const renderCard = (card, index) => {
    //     return (
    //         <div className='grid'>
    //             <Card style={{ width: '18rem' }} key={index} className="box">
    //                 <Card.Body>
    //                     <Card.Title>{card.title}</Card.Title>
    //                     <Card.Text>{card.text}</Card.Text>
    //                     <Button variant="primary" href={card.link}>View Here</Button>
    //                 </Card.Body>
    //             </Card>
    //             </div>
    //     )
    // }

    // return <div classname="grid">{cardInfo.map(renderCard)}</div>;


    return (
        <div className='grid'>
            <Card style={{ width: '18rem' }} className="box">
                <Card.Body>
                    <Card.Title>Book Search Engine</Card.Title>
                    <Card.Text>
                    This is an app that uses the Google Books API. You can login or signup, search for your favorite books, store them in a list, and delete ones you no longer want!
                    </Card.Text>
                    <Button variant="primary" href="https://book-search-engine-mern-jc.herokuapp.com/">View Here</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="box">
                <Card.Body>
                    <Card.Title>Tech Blog</Card.Title>
                    <Card.Text>
                    This is a place where you can login or signup and interact with blog posts! Leave others comments or post something totally new!
                    </Card.Text>
                    <Button variant="primary" href="https://tech-blog-jc.herokuapp.com/" className='button'>View Here</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="box">
                <Card.Body>
                    <Card.Title>Weather Dashboard</Card.Title>
                    <Card.Text>
                    We always have to be prepared for the weather, and what better way than to seach your favorite locations and see what it looks like there! Just simply search and the app will do the rest!
                    </Card.Text>
                    <Button variant="primary" href="https://joecliffordofficial.github.io/weather_forcast/" className='button'>View Here</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="box">
                <Card.Body>
                    <Card.Title>Quiz Game</Card.Title>
                    <Card.Text>
                    Think you know your coding stuff? Test yourself on the Quiz Game! Keep track of your top scores, but keep in mind one wrong question will set you back 10 seconds, so better brush up before trying!
                    </Card.Text>
                    <Button variant="primary" href="https://joecliffordofficial.github.io/quiz_game_hw4/" className='button'>View Here</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="box">
                <Card.Body>
                    <Card.Title>Social Network API</Card.Title>
                    <Card.Text>
                    An entierly backend project where you can add, delete, update, or see all users. YOu can also generate Thoughts where you can again add, update, delete, and see all the Thoughts. Check out the repo below and install to your local machine!
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/joecliffordofficial/socialNetworkAPI" className='button'>View Here</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="box">
                <Card.Body>
                    <Card.Title>Employee Tracker</Card.Title>
                    <Card.Text>
                    An entirely backend piece where you can use your terminal to keep track of employees! Define if they are a Manager, Engineer, Accountant, or much more! Add, update, remove anyone you'd like in this interactive terminal tracker. Check out the repo below and install to your local machine!
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/joecliffordofficial/employee_tracker" className='button'>View Here</Button>
                </Card.Body>
            </Card>
        </div>
    )

}
