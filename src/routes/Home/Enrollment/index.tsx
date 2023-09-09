import { Link } from "react-router-dom";
import ButtonPage from "../../../components/ButtonPage";
import Card from "../../../components/Card";

function Enrollment() {
  return (
    <main>
      <section>
        <div className="mt20 dce-container">
          <div className="dce-card-page">
            <Card name="Página de inscrição" />
          </div>
          <div className="mt20">
            <Link to="/">
              <ButtonPage name="Ver promoção" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Enrollment;
