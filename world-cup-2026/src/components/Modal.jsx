import "./Modal.css";

function Modal({ isOpen, player, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="player-modal">
      <div className="player-modal-overlay"></div>
      <div className="player-modal-content">
        <button className= "player-modal-close-button" onClick={onClose}>X</button>
        <h2> {player.player} </h2>
        <h3> {player.bio} </h3>
        <p> {player.description} </p>
        <p> Position: {player.position}</p>
        <p> Country: {player.country} </p>
        <p> Club: {player.team} </p>
        <p> Matches: {player.matches} </p>
        <p> Goals: {player.goals} </p>
        <p> Assists: {player.assists} </p>
      </div>
    </div>
  );
}

export default Modal;