import React, { useState, useEffect } from "react";

const ListItem = () => {
  let random = Math.ceil(Math.random() * 20) + 10;
  const [seconds, setSeconds] = useState(random);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <>{seconds > 0 ? <li>Исчезнет через {seconds} секунд</li> : null}</>;
};

export default ListItem;
