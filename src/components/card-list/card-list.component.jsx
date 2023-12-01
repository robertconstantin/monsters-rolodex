import "./card-list.styles.css";
import "../card/card.component";
import CardContainer from "../card/card.component";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardContainer monster={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;
