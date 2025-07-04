import jsx from "texsaur";
import { KTUComponent } from "../ktu/ui/core/ktu_component";

const sequence: string[] = ["L", "T", "R", "B"];
const lDistances: number[] = [1, 2, 3];
const rDistances: number[] = [1, -1];
export class TrackCard extends KTUComponent {
  paths: string;
  connections: string;

  constructor(paths: string, connections: string) {
    super();
    this.paths = paths;
    this.connections = connections;
  }

  render(): Element {
    return (
      <div className="card bridgeCard trackCard">
        <div className="debug">
          {this.paths} - {this.connections}
        </div>
        {sequence.map((s, i) => {
          if (this.paths[i] === "1" && this.connections[i] === "0") {
            return <img className="layerImage" src={`/${s}-0.png`} />;
          }
        })}
        {lDistances.map((d) => {
          if (this.connections[0] === "1" && this.connections[d] === "1") {
            return (
              <img
                className="layerImage"
                src={`/${sequence[0]}-${sequence[d]}.png`}
              />
            );
          }
        })}
        {rDistances.map((d) => {
          if (
            this.connections[2] === "1" &&
            this.connections[(2 + d) % 4] === "1"
          ) {
            return (
              <img
                className="layerImage"
                src={`/${sequence[2]}-${sequence[(2 + d) % 4]}.png`}
              />
            );
          }
        })}
        {this.connections[1] === "1" && this.connections[3] === "1" ? (
          <img
            className="layerImage"
            src={`/${sequence[1]}-${sequence[3]}.png`}
          />
        ) : null}
      </div>
    );
  }
}

customElements.define("track-card", TrackCard);
