export const getCountries = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        return data;
    }   
    catch(error) {
        console.error("Error fetching data: ", error);
    }
}