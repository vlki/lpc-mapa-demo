import { icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { uniq } from "lodash";
import "leaflet/dist/leaflet.css";

export default function Map({ peopleByDistricts, officesByDistricts }) {
  const districts = uniq([
    ...Object.keys(peopleByDistricts),
    ...Object.keys(officesByDistricts),
  ]);

  return (
    <MapContainer
      center={mapContainerCenter}
      zoom={7}
      scrollWheelZoom={false}
      style={{ width: "100%", height: 400 }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {districts.map((district) => (
        <Marker
          key={district}
          icon={markerIcon}
          position={
            districtPositions[district]
              ? districtPositions[district]
              : mapContainerCenter
          }
        >
          <Popup>
            <strong>{district}</strong>
            <br />
            {peopleByDistricts[district] !== undefined && (
              <>
                <span>{peopleByDistricts[district]} osob</span>
                <br />
              </>
            )}
            {officesByDistricts[district] !== undefined && (
              <>
                <span>{officesByDistricts[district]} ordinací</span>
              </>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

// Center Czechia
const mapContainerCenter = [49.8, 15.6];

const markerIcon = icon({
  iconUrl: "marker-icon.png",
  iconSize: [25, 41],
});

const districtPositions = {
  "Hlavní město Praha": { lat: 50.2348586, lng: 14.4438744 },
  "Středočeský kraj": { lat: 50.0826792, lng: 14.7762111 },
  "Karlovarský kraj": { lat: 50.2234664, lng: 12.6228906 },
  "Ústecký kraj": { lat: 50.4758394, lng: 13.6006739 },
  "Liberecký kraj": { lat: 50.8102525, lng: 15.0563622 },
  "Královehradecký kraj": { lat: 50.2831753, lng: 15.8913233 },
  "Pardubický kraj": { lat: 49.990945, lng: 15.8199122 },
  "Olomoucký kraj": { lat: 49.6720497, lng: 17.0778467 },
  "Moravskoslezský kraj": { lat: 49.7998603, lng: 18.0336572 },
  "Zlínský kraj": { lat: 49.2328219, lng: 17.7699853 },
  "Jihomoravský kraj": { lat: 49.1502528, lng: 16.6164208 },
  "Kraj Vysočina": { lat: 49.5153797, lng: 15.4353906 },
  "Jihočeský kraj": { lat: 49.0063261, lng: 14.4905664 },
  "Plzeňský kraj": { lat: 49.6436017, lng: 13.2930567 },
};
