import jsx from "texsaur";
import { KTUComponent } from "../ktu/ui/core/ktu_component";

export class StationCard extends KTUComponent {
  color: string;
  companies: { [key: string]: string } = {
    red: "Ashfield Express",
    orange: "Baskerville Meows",
    yellow: "Calico & Co.",
    green: "Dustpaw Railworks",
    blue: "Embercat Lines",
    violet: "Furball Freight",
    white: "Glimmerpaw Transit",
    black: "Hiss & Whisker Inc",
  };

  constructor(color: string) {
    super();
    this.color = color;
    console.log("StationCard created with color:", this.color);
  }

  render(): Element {
    return (
      <div className={`card bridgeCard stationCard ${this.color}`}>
        <div className="debug">{this.color}</div>
        <div className="title">{this.companies[this.color]}</div>
      </div>
    );
  }
}

customElements.define("station-card", StationCard);
