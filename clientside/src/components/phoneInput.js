import React from 'react';
import styles from './style/login.css';
import axios from 'axios';
function PhoneInput(props) {
	const { value, handleChange, hashHandleChange } = props;

	const Continue = (e) => {
		axios
			.post('http://localhost:8000/twilio-sms/send-otp', {
				phone: `${value.phone}`
			})
			.then(function(res) {
				console.log(res.data.otp);
				const hash = res.data.hash;
				hashHandleChange(hash);
			});

		e.preventDefault();
		props.nextStep();
	};
	return (
		<div className={styles}>
					
					<div className={styles.input_text}>Phone number:</div>
					<div className={styles.input_container}>
						<input
							type="tel"
							value={value.phone}
							onChange={handleChange('phone')}
							placeholder="Enter the Phone No."
							className={styles.input}
						/>
					</div>
					<button onClick={Continue} className={styles.submit}>
						Send OTP
					</button>
				</div>
	);
}

export default PhoneInput;