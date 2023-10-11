const Button = (props) => {
  const { buttons, text } = props;
  return <button className={`button ${buttons}`}>{text}</button>;
};

const element = (
  <div className="buttons-bg-container">
    <div className="content-container">
      <h1 className="heading">Social buttons</h1>
      <div>
        <Button buttons="like-button" text="Like" />
        <Button buttons="comment-button" text="Comment" />
        <Button buttons="share-button" text="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
