import { useEffect } from 'react';
import './Toggle.css';

const Toggle = () => {
  let list;
  useEffect(() => {
    list = document.querySelectorAll('.btn');
    list.forEach((link) => {
      link.addEventListener('click', onToggleButton);
    });
  });
  function onToggleButton() {
    list.forEach((link) => {
      link.classList.remove('active');
      this.classList.add('active');
    });
  }
  return (
    <div className='toggle'>
      <button className='btn active'>기본</button>
      <button className='btn'>상세</button>
    </div>
  );
};
export default Toggle;
