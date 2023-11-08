import Title from "../Tools/Title";

const BookClub = () => {
  const bookClubEvents = [
    {
      id: 1,
      title: "Monthly Book Club Meeting",
      date: "November 15, 2023",
      description:
        'Join us for a discussion of "The Great Gatsby" by F. Scott Fitzgerald.',
    },
    {
      id: 2,
      title: "Special Author Q&A",
      date: "December 5, 2023",
      description:
        'An exclusive live Q&A session with author Jane Doe, the author of "Mystery Novel."',
    },
  ];

  return (
    <div className="">
      <Title>Book Club Events</Title>
      <ul className="md:flex gap-4 ">
        {bookClubEvents.map((event) => (
          <li key={event.id} className="border flex-1 p-3 rounded-xl">
            <h3 className="font-bold text-2xl text-gray-400">{event.title}</h3>
            <p>
              <strong>Date :</strong> {event.date}
            </p>
            <p>
              <strong>Description :</strong> {event.description}
            </p>
          </li>
        ))}
      </ul>
      <div className="text-center my-10">
        <button className="btn btn-sm ">Buy Tickets</button>
      </div>
    </div>
  );
};

export default BookClub;
