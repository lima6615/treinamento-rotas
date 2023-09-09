import "./styles.css";

type Props = {
  name: string;
};

function Card({ name }: Props) {
  return (
    <div className="dce-font-card">
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
