import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
const useStyles = makeStyles((theme) => ({
  triangle: {
    width: 0,
    height: 0,
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
    borderBottom: '100px solid',
    animation: '$fadeInOut 3s linear infinite',
  },
  '@keyframes fadeInOut': {
    '0%': {
      opacity: 1,
      background: `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`,
    },
    '50%': {
      opacity: 0.5,
      background: `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`,
    },
    '100%': {
      opacity: 1,
      background: `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`,
    },
  },
}));

const Triangle = () => {
  const classes = useStyles();
  const [color, setColor] = useState(`linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(`linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.triangle} style={{ background: color }}></div>
  );
}

export default Triangle;