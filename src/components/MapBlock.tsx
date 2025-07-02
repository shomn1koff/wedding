import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const MapBlock = () => {
  const coordinates: [number, number] = [55.499899, 37.764275];

  return (
    <section className="w-full py-10 bg-pastel2 text-center px-4">
      <h2 className="text-2xl font-medium font-playfair mb-4">
        Место проведения
      </h2>

      <div className="w-full max-w-2xl mx-auto h-64 rounded-lg overflow-hidden shadow-md">
        <YMaps>
          <Map
            defaultState={{ center: coordinates, zoom: 16 }}
            width="100%"
            height="100%"
            options={{ suppressMapOpenBlock: true }}
          >
            <Placemark geometry={coordinates} />
          </Map>
        </YMaps>
      </div>
    </section>
  );
};

export default MapBlock;
