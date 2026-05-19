import "./Modal.css";

function Modal({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="overlay"></div>

      <div className="modal-content">
        <h2>Hello World</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          laboriosam nobis nulla voluptates similique a sapiente odio quod
          dolores dignissimos animi, perferendis totam mollitia tempora?
          Nihil molestiae necessitatibus neque possimus!
        </p>
      </div>
    </div>
  );
}

export default Modal;