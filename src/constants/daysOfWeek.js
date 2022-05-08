const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

export const daysOfWeekForForm = daysOfWeek
.map((day) => <option key={day} value={day}>{day}</option>);