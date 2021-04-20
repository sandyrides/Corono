import { MapControl, withLeaflet } from "react-leaflet";
import L from "leaflet";

class Legend extends MapControl {
  createLeafletElement(props) {}

  componentDidMount() {

    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const colors = ["#00FF00", "#FFFF00", "#FF0000"];
      const risks = ["Low Risk", "Medium Risk", "High Risk"];
      let labels = [];

      for (let i = 0; i < colors.length; i++) {

        labels.push(
          '<i style="background:' +
            colors[i] +
            '"></i> ' +
            risks[i]
        );
      }

      div.innerHTML = labels.join("<br>");
      return div;
    };

    const { map } = this.props.leaflet;
    legend.addTo(map);
  }

  componentWillUnmount(){
    
  }
}

export default withLeaflet(Legend);
