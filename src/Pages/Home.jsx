import { Calendar } from '../Components/Calendar'
import { Chart } from '../Components/Chart'

export const Home = () => {

    return (
        <div className="home__wrapper">
            <h1 className="home__header">
                Welcome to Beautiful Sunflower Athletic House
            </h1>
            <div className='calendar__wrapper'>
                <Calendar />
            </div>

            <div className="chart__wrapper">
                <Chart />
            </div>
        </div>
    )
}