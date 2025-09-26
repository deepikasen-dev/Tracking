import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen: React.FC = () => {
    return (
        <View style={ styles.container }>
            <MapView
                style={ styles.map }
                initialRegion={ {
                    latitude: 20.5937,   // Center of India
                    longitude: 78.9629,
                    latitudeDelta: 10,   // Zoom out more
                    longitudeDelta: 10,
                } }
                userInterfaceStyle="light"
            >
                <Marker
                    coordinate={ { latitude: 22.7196, longitude: 75.8577 } } // ✅ Fixed coords
                    pinColor="red"
                    title="Indore"
                    description="Cleanest City"
                />
            </MapView>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
} );
