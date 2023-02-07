import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
const API_KEY = 'AIzaSyAad8rzb9s-kLuWbG2WfMURv_lYUAKc1o0';

async function getEvents(eventIds, calendarId) {
  const promises = eventIds.map(eventId => {
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}?key=${API_KEY}`;
    return fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Event with ID ${eventId} not found`);
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(error => {
        console.error(error);
        return null;
      });
  });

  const events = await Promise.all(promises);
  return events.filter(event => event !== null);
}

function formatTime(startTime, endTime) {
  let start = new Date(startTime);
  let end = new Date(endTime);

  let startHour = start.getHours();
  let startMinute = start.getMinutes();
  let endHour = end.getHours();
  let endMinute = end.getMinutes();

  let startAmPm = startHour >= 12 ? 'pm' : 'am';
  let endAmPm = endHour >= 12 ? 'pm' : 'am';

  startHour = startHour % 12;
  endHour = endHour % 12;
  startHour = startHour ? startHour : 12;
  endHour = endHour ? endHour : 12;

  startMinute = startMinute < 10 ? `0${startMinute}` : startMinute;
  endMinute = endMinute < 10 ? `0${endMinute}` : endMinute;

  return `${startHour}:${startMinute}${startAmPm} - ${endHour}:${endMinute}${endAmPm}`;
}

function dateToString(timeString) {
  const date = new Date(timeString);
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const dayOfMonth = date.getUTCDate();
  const monthOfYear = monthsOfYear[date.getMonth()];
  return `${dayOfWeek}, ${monthOfYear} ${dayOfMonth}, ${date.getFullYear()}`;
}

const Calendar = ({ url }) => {
  const [date, setDate] = useState(() => new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(new URL(url).search);
    const calendarId = urlParams.get('src');
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const timeMin = date.toISOString();
    const timeMax = lastDayOfMonth.toISOString();

    fetch(
      // `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?timeMin=${timeMin}&timeMax=${timeMax}&key=${API_KEY}`,
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?timeMin=${timeMin}&timeMax=${timeMax}&key=${API_KEY}`,
    )
      .then(response => response.json())
      .then(({ items }) => {
        const itemIds = items.map(({ iCalUID, id }) => id);

        getEvents(itemIds, calendarId)
          .then(data =>
            setEvents(
              data.sort(function (a, b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return (
                  new Date(a?.start?.dateTime) - new Date(b?.start?.dateTime)
                );
              }),
            ),
          )
          .catch(error => {
            console.log('error fetch individual event data', error);
          });
      })
      .catch(error => {
        console.log('error fetching events', error);
        setEvents([]);
      });
  }, [url, date]);

  if (!events.length)
    return <div>There are no more events in {date.getMonth()}.</div>;

  return (
    <ol tw="p-0 m-0 relative border-l border-gray-200 dark:border-gray-700">
      {events.map(({ end, start, summary }, index) => (
        <li key={index} tw="mb-10 ml-4">
          <h3 tw="font-bold">
            <time>{dateToString(start?.dateTime)}</time>
          </h3>
          <h4 tw="text-sm">{summary}</h4>
          <time tw="text-xs italic">
            {formatTime(start?.dateTime, end?.dateTime)}
          </time>
        </li>
      ))}
    </ol>
  );
};

export default Calendar;
