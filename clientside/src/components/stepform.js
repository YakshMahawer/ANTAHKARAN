import React, { useState } from 'react';
import PhoneInput from './phoneInput';
import Otpverify from './otpverify';
const StepForm = () => {
	const [ state, setState ] = useState({
		phone: '',
		otp: ''
	});

	const [step, setStep] = useState(1)
	
	const handleChange = (input) => (e) => {
		setState({...state, [input]: e.target.value });
	};
	const nextStep = () => {
       
		setStep(prevStep => prevStep + 1)
	};

	const prevStep = () => {
        
		setStep(prevStep => prevStep - 1)
	};
	
	const { phone, otp } = state;
	const value = { phone, otp };

	switch (step) {
		case 1:
			return <PhoneInput nextStep={nextStep} handleChange={handleChange} value={value} />;
		case 2:
            return <Otpverify nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} value={value} />;
        default:
            return <PhoneInput nextStep={nextStep} handleChange={handleChange} value={value} />  
            
    }
};

export default StepForm;