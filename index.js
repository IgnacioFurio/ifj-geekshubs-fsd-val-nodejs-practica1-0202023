const axios = require(`axios`);

const TraeLocalizaciones = async () => {
    let resultado = await axios.get("https://rickandmortyapi.com/api/location")

        return resultado;
};

TraeLocalizaciones()
    .then(
        res => {

            res.data.results.map(
                (location) => console.log(location?.name)
            )

        }

    )
    .catch(
        error => console.log(error)
    );