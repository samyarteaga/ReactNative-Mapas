import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

const locations = [
  {
    latitude: 19.310864,
    longitude: -98.898299,
    title: "ubicación 2"
  },
  {
    latitude: 19.310421,
    longitude: -98.890901,
    title: "ubicación 3"
  },
];

export default function App() {
  const [region, setRegion] = useState({
    latitude: 19.321419,
    longitude: -98.894757,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} zoomControlEnabled={true}>
      <Marker coordinate={region} title="Mi ubicación" />
      {locations.map((loc,i) => <Marker key={i} coordinate={loc} title={loc.title} />)}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    ...StyleSheet.absoluteFillObject,
  },
});
