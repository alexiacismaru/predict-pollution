export interface Predictions {
    id: number;
    timestamp: string;
    location: {
        latitude: number;
        longitude: number;
    }; 
    pollution: number;
}