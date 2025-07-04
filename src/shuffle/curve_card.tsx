import jsx from "texsaur";
import { KTUComponent } from "../ktu/ui/core/ktu_component";

export class CurveCard extends KTUComponent {
  paths: string[];

  constructor(paths: string[]) {
    super();
    this.paths = paths;
    console.log("CurveCard created with paths:", this.paths);
  }

  render(): Element {
    return (
      <div className="card bridgeCard trackCard curveCard">
        <div className="debug">{this.paths}</div>
        {this.paths.map((path) => {
          return <img className="layerImage" src={`/${path}.png`} />;
        })}
      </div>
    );
  }
}

customElements.define("curve-card", CurveCard);
