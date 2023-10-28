import axios from "axios";
import endpoints from "./endpoints";

export const getAccommodationsWihtCategories = async () => {
    try {
        const accommodationsResponse = await axios.get(endpoints.accommodations);
        const categoriesResponse = await axios.get(endpoints.categories);

        const accommodations = accommodationsResponse.data;
        const categories = categoriesResponse.data;

        if (accommodations.length && categories.length) {

            const accommodationsWithCategory = accommodations.map(item => {
                const categoryId = item.categoryId;
                const category = categories.find(element => element.id === categoryId)
                return {
                    ...item,
                    category
                }
            })
            console.log(accommodationsWithCategory);
            return accommodationsWithCategory;
        } else {
            return null;
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}