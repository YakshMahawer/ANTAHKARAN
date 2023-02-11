import React, { useState } from 'react';
import styles from './style/login.css';
import axios from 'axios';

function OtpVerify(props) {
	axios.defaults.withCredentials = true;

	const [ error, setError ] = useState({
		error: '',
		success: ''
	});
	const { value, handleChange } = props;
    const back = (e) => {
		e.preventDefault();
		props.prevStep();
	};

	const confirmOtp = () => {
		axios
			.post('http://localhost:8000/twilio-sms/verify-otp', {
				phone: `${value.phone}`,
				otp: `${value.otp}`,
				withCredentials: true
			})
			.then(function(res) {
				console.log(res.data);
				window.location.reload();
			})
			.catch(function(error) {
				console.log(error.response.data);
				setError({ ...error, error: error.response.data.msg });
			});
	};
	return (
		<div className={styles}>
                    <div className={styles.error}>{error.error}</div>
					<div className={styles.success}>{error.success}</div>
					<div className={styles.input_text}>Enter One Time Password:</div>
					<div className={styles.input_container}>
						<input
							type="tel"
							value={value.otp}
							onChange={handleChange('otp')}
							placeholder="Enter the 6 digits OTP"
							className={styles.input}
						/>
					</div>
                    <button onClick={back} className={styles.back}>
						Back
					</button>
					<button onClick={confirmOtp} className={styles.submit}>
						Confirm OTP
					</button>
				</div>
	);
}

export default OtpVerify;