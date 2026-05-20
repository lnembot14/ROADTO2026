import "./Modal.css";

function Modal({ isOpen, player, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="player-modal">
      <div className="player-modal-overlay"></div>
      <div className="player-modal-content">
        <button className= "player-modal-close-button" onClick={onClose}>X</button>
        <h2> {player.player} </h2>
        <p> {player.bio} </p>
      </div>
    </div>
  );
}

export default Modal;