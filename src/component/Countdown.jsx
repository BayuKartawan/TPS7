import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const Countdown = ({ targetDate }) => {
    const calculateTimeRemaining = useCallback(() => {
        const now = new Date();
        const targetTime = targetDate ? new Date(targetDate) : now;

        const timeDifference = targetTime - now;

        if (timeDifference <= 0) {
            // Countdown selesai
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }, [targetDate]);

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining);
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeRemaining]);

    return (
        <div className="w-layout-blockcontainer hitung w-container">
            <div className="div-block-5">
                <div className="text-block-5">Hitung Mundur Menuju<br />14 Februari 2024</div>
            </div>
            <div className="columns w-row">
                <div className="column w-col w-col-3">
                    <div className="div-block-3">
                        {timeRemaining.days > 0 && (
                            <div>
                                <div className="text-block-3">{timeRemaining.days}</div>
                                <div className="text-block-4">Hari</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="column-2 w-col w-col-3">
                    <div className="div-block-3">
                        {timeRemaining.days > 0 && (
                            <div>
                                <div className="text-block-3">{timeRemaining.hours}</div>
                                <div className="text-block-4">Jam</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-col w-col-3">
                    <div className="div-block-3">
                        {timeRemaining.days > 0 && (
                            <div>
                                <div className="text-block-3">{timeRemaining.minutes}</div>
                                <div className="text-block-4">Menit</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-col w-col-3">
                    <div className="div-block-3">
                        {timeRemaining.days > 0 && (
                            <div>
                                <div className="text-block-3">{timeRemaining.seconds}</div>
                                <div className="text-block-4">Detik</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

Countdown.propTypes = {
    targetDate: PropTypes.string.isRequired,
};

export default Countdown;
