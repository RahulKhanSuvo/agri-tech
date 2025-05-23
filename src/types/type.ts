import { FieldErrors, UseFormRegister } from "react-hook-form";

export type WeatherData = {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min?: number;
        temp_max?: number;
        pressure: number;
        humidity: number;
        sea_level?: number;
        grnd_level?: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust?: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
    uvi?: number;
    forecast?: {
        dt: number;
        main: { temp: number };
        weather: { description: string; icon: string }[];
        sys: { pod: string };
    }[];
};
export interface MarketplaceItem {
    _id?: string;
    name: string;
    image: string;
    description: string;
    price: string;
    category: "seeds" | "equipment";
    condition?: "new" | "used";
    seller: {
        name: string;
        contact: string;
        location: string;
    };
    stock: number;
}
export interface MarketplaceItemForBuy {
    _id?: string;
    availabilityDate: string;
    category: string;
    description: string;
    email: string;
    isOrganic: boolean;
    location: string;
    price: string;
    productName: string;
    productPhoto: string;
    quantity: string;
    unit: string;
    username: string;
    listed: string;
}
export interface FormData {
    _id?: string;
    userEmail: string;
    userName: string;
    productName: string;
    category: string;
    description: string;
    price: number | "";
    quantity: number | "";
    unit?: string;
    location: string;
    contactInfo?: [];
    photos: File[]
    listed?: string;
    phoneNumber: number | string
    // Category-specific fields
    cropType?: string;
    fertilizerType?: string;
    livestockType?: string;
    plantType?: string;
    fisheriesType?: string;
    equipmentType?: string;
    pesticideType?: string;
    harvestDate?: string;
    organicStatus?: boolean;
    qualityGrade?: string;
    chemicalComposition?: string;
    volume?: number;
    applicationMethod?: string;
    safetyCertifications?: string;
    brand?: string;
    model?: string;
    condition?: string;
    yearOfManufacture?: string;
    horsepower?: number | string;
    toolType?: string;
    material?: string;
    dimensions?: string;
    animalType?: string;
    breed?: string;
    age?: string;
    healthStatus?: string;
    gender?: string;
    feedType?: string;
    nutritionalContent?: string;
    weight?: string;
    targetAnimal?: string;
    seedPlantType?: string;
    germinationRate?: string;
    plantingSeason?: string;
    systemType?: string;
    coverageArea?: string;
    flowRate?: string | number;
    itemType?: string;
    storageCapacity?: string;
    isNegotiable?: boolean;
    expiryData?: string;
    type?: string
}
export interface IFormInput {
    productName: string;
    category: string;
    stock: number;
    description: string;
    price: number;
    discountedPrice: number;
    unit: string;
}
export interface TagsProps {
    tags: string[];
    setTags: React.Dispatch<React.SetStateAction<string[]>>;
    register: UseFormRegister<IFormInput>
    errors: FieldErrors<IFormInput>

}
export interface Product {
    _id: string;
    productName: string;
    category: string;
    stock: string;
    unit: string;
    description: string;
    price: string;
    discountedPrice?: string;
    photoUrls: string[];
    tags: string[];
    userName: string;
    userEmail: string;
    userImage: string;
    listed: string;
    verifyStatus: boolean;
}
