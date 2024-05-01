import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ConfirmModal = ({content, userName, img, navigate}) => {
    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box flex flex-col items-center">
                <div >
                    <img className="w-20 rounded-full border-2 border-green-500" src={img} alt="" />
                </div>
                <h3 className="font-bold text-2xl text-green500">Hello! {userName}</h3>
                <p className="py-4 text-xl font-semibold">Congratulations..! For your {content}</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn"><Link to={navigate}>Close</Link></button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

ConfirmModal.propTypes = {
    content: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    navigate: PropTypes.string.isRequired,
}

export default ConfirmModal;