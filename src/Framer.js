import { useEffect } from "react";

// Add your form component inside JSX
export default function FormSubmit() {

  // Add the JavaScript to handle form submission inside useEffect
  useEffect(() => {
    const form = document.querySelector('form');
    
    // Clean up any previous event listeners to prevent multiple submissions
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      const name = document.querySelector('input[name="name"]').value;
      const email = document.querySelector('input[name="email"]').value;
      
      const data = { name, email };

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxiYlv8E9Hw3d32yz0yumWhzeq-PAnpdapei3QbHx5MmbLRLKZxmUYvy8f9tvlTeISggg/exec', {
          method: 'POST',
          mode: "no-cors",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.error('Error during form submission:', error);
        alert('Form submission failed due to an error.');
      }
    };

    form.addEventListener('submit', handleSubmit);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };

  }, []);

  // Return the JSX structure of the form
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
