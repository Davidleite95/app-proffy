export default function convertHourToMinutes(time: string) {
    // 8:00
    const [hour, minutes] = time.split(':').map(Number);
    const timesInMinutes = (hour * 60) + minutes;

    return timesInMinutes;
}