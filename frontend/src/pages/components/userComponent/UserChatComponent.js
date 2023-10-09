import "../../../chats.css";

export const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <i className="bi bi-chat-left-dots comment"></i>
        <span className="position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
        <i className="bi bi-x-square close"></i>
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Let's Chat</h6>
        </div>
        <div className="chat-form">
          <div className="chat-msg">
            {Array.from({ length: 20 }).map((_, id) => {
              return (
                <div key={id}>
                  <p>
                    <b>You wrote:</b> Hello, world!
                  </p>
                  <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                    <b>You wrote:</b> Hello, world!
                  </p>
                </div>
              );
            })}
          </div>
          <textarea
            id="clientChatMsg"
            className="form-control"
            placeholder="Your Message . . ."
          ></textarea>
          <button className="btn btn-success btn-block">Submit</button>
        </div>
      </div>
    </>
  );
};
