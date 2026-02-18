import jsx from "texsaur";
import { KTUComponent } from "../ktu/ui/core/ktu_component";

export class TunnelCard extends KTUComponent {
  constructor() {
    super();
    console.log("TunnelCard created");
  }

  render(): Element {
    return (
      <div className="card bridgeCard trackCard">
        <div className="debug">TUNNEL</div>
        <img className="layerImage" src="TUNNEL.png" />
      </div>
    );
  }
}

customElements.define("tunnel-card", TunnelCard);
