export const handleButtonClick = (buttonName, pressedButton, setPressedButton) => {
    setPressedButton(buttonName === pressedButton ? null : buttonName);
};
  
export const handleInputChange = (event, setPhoneNumber) => {
    setPhoneNumber(event.target.value);
};

export const handleCallClick = (phoneNumber, setErrorMessage) => {
    if (isValidPhoneNumber(phoneNumber)) {
      // Handle the call action here, e.g., send the phone number to an API
    fetch('https://1f5d-132-170-212-15.ngrok-free.app/call', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true',
      },
      body: JSON.stringify({
        phone: `+1${phoneNumber}`,
        persona: 'bank',
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
      setErrorMessage(''); // Clear any previous error message
    } else {
      setErrorMessage('Invalid phone number. Please enter a 10-digit numerical phone number.');
    }
};

export const handleScrollDown = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
};