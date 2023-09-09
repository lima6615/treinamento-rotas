import { Link } from "react-router-dom";
import ButtonPage from "../../../components/ButtonPage";
import Card from "../../../components/Card";

function Promotion() {
  return (
    <main>
      <section>
        <div className="mt20 dce-container">
          <div className="dce-card-page">
            <Card name="Página de promoção" />
          </div>
          <div className="mt20">
            <Link to="/enrollment">
              <ButtonPage name="Quero participar" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Promotion;
