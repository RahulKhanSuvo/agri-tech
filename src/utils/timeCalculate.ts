export const timeAgeCalculator = (
    dateString: string,) => {
    const now = new Date();
    const past = new Date(dateString);
    const secondsAgo = Math.floor((now.getTime() - past.getTime()) / 1000);
    if (secondsAgo < 60) {
        return `${secondsAgo} seconds ago`;
    }
    const minutes = Math.floor(secondsAgo / 60);
    if (minutes < 60) {
        return `${minutes} minutes ago`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours} hours ago`;
    }
    const days = Math.floor(hours / 24);
    if (days < 30) {
        return `${days} days ago`;
    }
    const months = Math.floor(days / 30);
    if (months < 12) {
        return `${months} months ago`;
    }
    const years = Math.floor(months / 12);
    return `${years} years ago`;
}