export default function Button(props) {
  const { onClick, onChange } = props;

  const onClickHandler = (event) => {
    event.preventDefault();
    onClick();
  };

  const onChangeHandler = (event) => {
    event.preventDefault();
    onChange();
  };

  return (
    <>
      <button className="my-button" onClick={onClickHandler}>
        Click on Me!
      </button>
      <input type="text" placeholder="Child input" onChange={onChangeHandler} />
    </>
  );
}
