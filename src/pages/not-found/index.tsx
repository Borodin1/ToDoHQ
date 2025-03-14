import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-stretch ">
      <h2 className='text-5xl'>Your visited page not found.<br/>You may go home page.</h2>
      <Link to="/" className='text-sky-500'>Back to home page</Link>
    </div>
  );
};
