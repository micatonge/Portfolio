import { FaLinkedin } from 'react-icons/fa';

function LinkedInButton() {
  const linkedinUrl = 'https://www.linkedin.com/micatonge';

  const handleClick = () => {
    window.open(linkedinUrl, '_blank');
  };

  return (
    <button onClick={handleClick}>
      <FaLinkedin size={30} />
    </button>
  );
}

export default LinkedInButton;
