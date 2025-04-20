import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngTuple } from 'leaflet';

interface MapComponentProps {
    countries: Array<{
        id: string;
        name: string;
        capital: string;
        position: LatLngTuple;
    }>;
    selectedCountry: string | null;
    setSelectedCountry: (id: string) => void;
    centerPosition: LatLngTuple;
}

export default function MapComponent({
    countries,
    selectedCountry,
    setSelectedCountry,
    centerPosition,
}: MapComponentProps) {
    const mapRef = useRef<L.Map | null>(null);

    // Fix Leaflet default icon issue
    useEffect(() => {
        L.Icon.Default.mergeOptions({
            iconUrl:
                'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            iconRetinaUrl:
                'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
            shadowUrl:
                'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        });
    }, []);

    // Update map view when selected country changes
    useEffect(() => {
        if (selectedCountry && mapRef.current) {
            const country = countries.find((c) => c.id === selectedCountry);
            if (country) {
                mapRef.current.setView(country.position, 5);
            }
        }
    }, [selectedCountry, countries]);

    return (
        <MapContainer
            center={centerPosition}
            zoom={selectedCountry ? 5 : 4}
            style={{ height: '100%', width: '100%' }}
            ref={mapRef}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {countries.map((country) => (
                <Marker
                    key={country.id}
                    position={country.position}
                    eventHandlers={{
                        click: () => {
                            setSelectedCountry(country.id);
                        },
                    }}
                >
                    <Popup>
                        <div className='font-medium'>{country.name}</div>
                        <div className='text-sm'>
                            Capital: {country.capital}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
