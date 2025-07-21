import "./Modal.css"

export default function Modal({ onSelect, onClose }) {
    return (
        <>
            <div class="modal-overlay">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Xác nhận</h3>
                        <p class="modal-message">Bạn có muốn mua thẻ bài này không?</p>
                    </div>
                    <div class="modal-buttons">
                        <button class="modal-button btn-yes" onClick={onSelect}>Có</button>
                        <button class="modal-button btn-no" onClick={onClose}>Không</button>
                    </div>
                </div>
            </div>
        </>
    )
}