import jsx from "texsaur";
import { KTUComponent } from "../ktu/ui/core/ktu_component";

export class BridgeCard extends KTUComponent {
  constructor() {
    super();
    console.log("BridgeCard created");
  }

  render(): Element {
    return (
      <div className="card bridgeCard trackCard">
        <div className="debug">BRIDGE</div>
        <img className="layerImage" src="BRIDGE.png" />
      </div>
    );
  }
}

customElements.define("bridge-card", BridgeCard);
