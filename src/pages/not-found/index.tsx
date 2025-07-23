import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center p-5">
      <div className='flex flex-col justify-center items-center gap-2.5'>
      <h2 className='text-5xl font-semibold'>Your visited page not found.<br/>You may go home page.</h2>
      <Link to="/" className='text-sky-500 font-medium'>Back to home page</Link>
      </div>
    </div>
  );
};
