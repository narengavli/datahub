import { createContext, useContext, useMemo, useState } from "react";
import ProductData from "./../Data/data.json";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [productData] = useState(ProductData);

    const topProducts = useMemo(() => {
        return productData.filter((product) => product.topproduct === true);
    }, [productData]);

    return (
        <DataContext.Provider value={{ productData, topProducts }}>
            {children}
        </DataContext.Provider>
    );
};

// custom hooks
const useProductContext = () => {
    return useContext(DataContext);
};

export { DataProvider, DataContext, useProductContext };
