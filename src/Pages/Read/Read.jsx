import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Pdf from "../../Components/Pdf/Pdf";
import { PDFViewer } from "@react-pdf/renderer";

const Read = () => {
  const [book, setBook] = useState("");
  const axios = useAxios();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/details/${id}`)
      .then((res) => {
        setBook(res.data);
        toast.success(`Successfully got book ..`);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [id, axios]);
  return (
    <div className="h-screen flex flex-col items-center justifycenter">
      <PDFViewer className="w-screen h-screen">
        <Pdf book={book}></Pdf>
      </PDFViewer>
    </div>
  );
};

export default Read;
