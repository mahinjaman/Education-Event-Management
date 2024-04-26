import PropTypes from 'prop-types';
import { GiBlackBook } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
const PopularCourseCard = ({ course, handleAddToCard }) => {
    const { id,course_img,course_title,lesson,students,price,rating} = course;
    return (
        <div className=' bg-slate-700 rounded-md text-gray-200 p-5 group'>
            <div className='overflow-hidden  rounded-md mb-4'>
                <img className='duration-500 group-hover:scale-110'  src={course_img} alt={course_title} />
            </div>
            <div className='flex flex-col gap-4 relative'>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-4" />
                    <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400 w-4" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400 w-4" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400 checked: w-4" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400 w-4" />
                    <span>({rating})</span>
                </div>
                <h4 className='text-3xl'>{course_title}</h4>
                <div className='flex justify-between text-lg border-b border-dashed'>
                    <p className='flex items-center mb-4'><GiBlackBook></GiBlackBook> <span className='mx-2'>Lesson</span> {lesson}</p>
                    <p className='flex items-center mb-4'><IoMdPerson></IoMdPerson> <span className='mx-2'>Students</span> {students}</p>
                </div>
                <div className='flex justify-between text-lg'>
                    <p className='text-2xl font-semibold text-[#FD6D4B]'>${price} <span className='text-xl text-slate-400' style={{ textDecoration: 'line-through' }}>$100</span></p>
                    <button className='flex items-center' onClick={() => handleAddToCard(id)}><MdOutlineShoppingCart></MdOutlineShoppingCart> <span className='ml-2'>Add To card</span></button>
                </div>
            </div>
        </div>
    );
};

PopularCourseCard.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCard: PropTypes.func.isRequired,
}

export default PopularCourseCard;