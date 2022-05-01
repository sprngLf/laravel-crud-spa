import { BiErrorCircle } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

const ErrorHelper = ({ text, close }) => {
    return (
        <div className="flex items-center rounded-md bg-rose-400 text-white p-4">
            <BiErrorCircle />
            <span className="flex-1 ml-4">{text}</span>
            <MdClose onClick={close} />
        </div>
    );
};

export default ErrorHelper;
