import Title from "../Tools/Title";

const Support = () => {
  return (
    <div className=" p-4 ">
      <Title>Customer Support</Title>
      <p className="text-lg my-4">
        If you have any questions, issues, or need assistance, our customer
        support team is here to help you. Please feel free to reach out to us
        through any of the following methods:
      </p>

      <div className="mt-4  text-center">
        <div className="p-4 my-4 shadow-xl shadow-black rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <p className="text-gray-300 dark:text-gray-700">Email: support@bookshelf.com</p>
          <p className="text-gray-300 dark:text-gray-700">Phone: (123) 456-7890</p>
        </div>

        <div className=" p-4 shadow-xl shadow-black rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
          <p className="text-gray-300 dark:text-gray-700">Monday to Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-300 dark:text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
          <p className="text-gray-300 dark:text-gray-700">Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
