import axios from "axios";

const API_BASE_URL='https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego'

const YELP_API_KEY="M4wLoYK4kg5xP72DjgG3TYQRD0xDPl0traJ6WyKBq80_gyqcrt2H-AQ1qpfDJJvsTiHBUoeY2R57UfZnABGkNW9QVrdUxFeWYUu6lGa1zHgVHUXBUoT4A6QqozYdYnYx"

const options={
    headers: {
       Authorization:`Bearer ${YELP_API_KEY}` 
    }
}
class Restaurant{
   
    getRestaurant()
    {
        return axios.get(API_BASE_URL ,options)
    }
}

export default new Restaurant();