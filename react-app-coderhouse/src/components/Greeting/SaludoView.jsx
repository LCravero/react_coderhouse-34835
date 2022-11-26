export default function SaludoView(props) {
  const { personName } = props;

  return (
    <div className="flex-container">
      <p className="greeting">
        Hi! 👋🏼 How are you <b>{personName}</b>?
      </p>
    </div>
  );
}
