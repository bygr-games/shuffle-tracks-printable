import jsx from "texsaur";
import { KTUComponent } from "../ktu/ui/core/ktu_component";

export class StationCard extends KTUComponent {
  color: string;

  constructor(color: string) {
    super();
    this.color = color;
    console.log("StationCard created with color:", this.color);
  }

  render(): Element {
    return (
      <div className={`card bridgeCard stationCard ${this.color}`}>
        <div className="debug">{this.color}</div>
      </div>
    );
  }
}

customElements.define("station-card", StationCard);
