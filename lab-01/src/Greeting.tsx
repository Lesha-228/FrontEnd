const Greeting = () => {
  const now = new Date();
  const hour = now.getHours();

  let message = "";
  let color = "";

  if (hour >= 6 && hour < 12) {
    message = "Good Morning";
    color = "orange";
  } else if (hour >= 12 && hour < 18) {
    message = "Good Afternoon";
    color = "green";
  } else {
    message = "Good Evening";
    color = "purple";
  }

  return (
    <h1 style={{ color }}>
      {message}
    </h1>
  );
};

export default Greeting;