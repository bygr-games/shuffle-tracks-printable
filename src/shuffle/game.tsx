import jsx from "texsaur";
import { KTUComponent } from "../ktu/ui/core/ktu_component";
import { TrackCard } from "./track_card";
import { CurveCard } from "./curve_card";
import { StationCard } from "./station_card";
import { BridgeCard } from "./bridge_card";

export class Game extends KTUComponent {
  combinations: number = 15;
  colors: string[] = ["red", "green", "blue", "yellow", "purple", "cyan"];

  constructor() {
    super();
  }

  render(): Element {
    let elements: Element[] = [];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    /*
    // ALL CARDS ONCE
    for (let i = 1; i <= this.combinations; i++) {
      for (let ii = 0; ii <= this.combinations; ii++) {
        const paths = this.toBinary(i);
        const connections = this.toBinary(ii);
        let good = true;

        good = good && i != 4 && i != 8 && i != 9 && i != 12;
        // Check if the paths and connections are valid
        if (connections.indexOf("1") >= 0) {
          good =
            good && (connections.match(new RegExp("1", "g")) || []).length > 1;
        }
        for (let j = 0; j < 4; j++) {
          if (connections[j] === "1") {
            good = good && connections[j] === paths[j];
          }
        }

        if (good) {
          elements.push(new TrackCard(paths, connections).render());
          count1++;
        }
      }
    }
    elements.push(new CurveCard(["L-T", "R-B"]).render());
    count1++;
    elements.push(new CurveCard(["L-B", "R-T"]).render());
    count1++;
    */
    // NON-DEAD END CARDS AGAIN
    for (let i = 1; i <= this.combinations; i++) {
      for (let ii = 0; ii <= this.combinations; ii++) {
        const paths = this.toBinary(i);
        const connections = this.toBinary(ii);
        let good = true;
        good = good && i != 4 && i != 8 && i != 9 && i != 12;
        // Check if the paths and connections are valid
        good =
          good && (connections.match(new RegExp("1", "g")) || []).length > 1;
        for (let j = 0; j < 4; j++) {
          if (connections[j] === "1") {
            good = good && connections[j] === paths[j];
          }
        }

        if (good) {
          elements.push(new TrackCard(paths, connections).render());
          count2++;
        }
      }
    }
    elements.push(new CurveCard(["L-T", "R-B"]).render());
    count2++;
    elements.push(new CurveCard(["L-B", "R-T"]).render());
    count2++;
    elements.push(new CurveCard(["L-B", "R-B", "T-0"]).render());
    count2++;
    elements.push(new CurveCard(["L-B", "L-R", "T-0"]).render());
    count2++;
    elements.push(new CurveCard(["R-B", "L-R", "T-0"]).render());
    count2++;
    elements.push(new BridgeCard().render());
    count2++;
    for (let i = 1; i <= this.combinations; i++) {
      for (let ii = 0; ii <= this.combinations; ii++) {
        const paths = this.toBinary(i);
        const connections = this.toBinary(ii);
        let good = true;
        good = good && i != 4 && i != 8 && i != 9 && i != 12;
        // Check if the paths and connections are valid
        good =
          good && (connections.match(new RegExp("1", "g")) || []).length > 1;
        for (let j = 0; j < 4; j++) {
          if (connections[j] === "1") {
            good = good && connections[j] === paths[j];
          }
        }

        if (good) {
          elements.push(new TrackCard(paths, connections).render());
          count2++;
        }
      }
    }
    elements.push(new CurveCard(["L-T", "R-B"]).render());
    count2++;
    elements.push(new CurveCard(["L-B", "R-T"]).render());
    count2++;
    elements.push(new CurveCard(["L-B", "R-B", "T-0"]).render());
    count2++;
    elements.push(new CurveCard(["L-B", "L-R", "T-0"]).render());
    count2++;
    elements.push(new CurveCard(["R-B", "L-R", "T-0"]).render());
    count2++;

    elements.push(new BridgeCard().render());
    count2++;
    // NON-DEAD END CARDS AGAIN
    for (let i = 1; i <= this.combinations; i++) {
      for (let ii = 0; ii <= this.combinations; ii++) {
        const paths = this.toBinary(i);
        const connections = this.toBinary(ii);
        let good = true;
        good = good && i != 4 && i != 8 && i != 9 && i != 12;
        // Check if the paths and connections are valid
        good =
          good && (connections.match(new RegExp("1", "g")) || []).length > 2;
        for (let j = 0; j < 4; j++) {
          if (connections[j] === "1") {
            good = good && connections[j] === paths[j];
          }
        }

        if (good) {
          elements.push(new TrackCard(paths, connections).render());
          count3++;
        }
      }
    }
    elements.push(new CurveCard(["L-T", "R-B"]).render());
    count3++;
    elements.push(new CurveCard(["L-B", "R-T"]).render());
    count3++;
    elements.push(new CurveCard(["L-B", "R-B", "T-0"]).render());
    count2++;
    elements.push(new CurveCard(["L-B", "L-R", "T-0"]).render());
    count2++;
    elements.push(new CurveCard(["R-B", "L-R", "T-0"]).render());
    count2++;

    elements.push(new BridgeCard().render());
    count3++;
    // NON-DEAD END CARDS AGAIN
    for (let i = 1; i <= this.combinations; i++) {
      for (let ii = 0; ii <= this.combinations; ii++) {
        const paths = this.toBinary(i);
        const connections = this.toBinary(ii);
        let good = true;
        good = good && i != 4 && i != 8 && i != 9 && i != 12;
        // Check if the paths and connections are valid
        good =
          good && (connections.match(new RegExp("1", "g")) || []).length > 3;
        for (let j = 0; j < 4; j++) {
          if (connections[j] === "1") {
            good = good && connections[j] === paths[j];
          }
        }

        if (good) {
          elements.push(new TrackCard(paths, connections).render());
          count4++;
        }
      }
    }
    for (let i = 0; i < this.colors.length; i++) {
      elements.push(new StationCard(this.colors[i]).render());
    }
    for (let i = 0; i < this.colors.length; i++) {
      elements.push(new StationCard(this.colors[i]).render());
    }
    for (let i = 0; i < this.colors.length; i++) {
      elements.push(new StationCard(this.colors[i]).render());
    }

    elements = [];
    elements.push(new CurveCard(["L-B", "R-B", "T-0"]).render());
    count2++;
    elements.push(new CurveCard(["L-B", "L-R", "T-0"]).render());
    count2++;
    elements.push(new CurveCard(["R-B", "L-R", "T-0"]).render());
    count2++;

    elements.push(new CurveCard(["L-B", "R-B", "T-0"]).render());
    count2++;
    elements.push(new CurveCard(["L-B", "L-R", "T-0"]).render());
    count2++;
    elements.push(new CurveCard(["R-B", "L-R", "T-0"]).render());
    count2++;

    elements.push(new CurveCard(["L-B", "R-B", "T-0"]).render());
    count2++;
    elements.push(new CurveCard(["L-B", "L-R", "T-0"]).render());
    count2++;
    elements.push(new CurveCard(["R-B", "L-R", "T-0"]).render());
    count2++;
    elements.push(new BridgeCard().render());
    count3++;
    elements.push(new BridgeCard().render());
    count3++;
    elements.push(new BridgeCard().render());
    count3++;

    return (
      <div>
        <div className="debug">
          {count1} - {count2} - {count3} - {count4} - {count5}
        </div>
        <div>{elements}</div>
      </div>
    );
  }

  toBinary(n: number): string {
    return n.toString(2).padStart(4, "0");
  }
}

customElements.define("game-root", Game);
