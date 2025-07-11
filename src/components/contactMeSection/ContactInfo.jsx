import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="mz.mehedi37@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="01771596515" Image={FiPhone} />
      <SingleInfo text="Mohakhali, Dhaka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
