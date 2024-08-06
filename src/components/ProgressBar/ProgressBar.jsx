import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./progressBar.scss";

function ProgressBar({ item }) {
    return (
        <div className='progressBar'>
            <CircularProgressbar
                value={item}
                strokeWidth={14}
                text={`${item}%`}
                styles={buildStyles({
                    textColor: 'white',
                })}
            />
        </div>
    );
}

export default ProgressBar;