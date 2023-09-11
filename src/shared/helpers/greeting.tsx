export function getGreetingByTime(): string {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 4 && currentHour < 12) {
    return `Good Morning `;
  } else if (currentHour >= 12 && currentHour < 16) {
    return `Good Afternoon `;
  } else {
    return `Good Night `;
  }
}
