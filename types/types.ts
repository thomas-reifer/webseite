export interface SlotDTO {
    start: string | null | undefined; // ISO date string
    end: string | null | undefined;   // ISO date string
    summary: string| null | undefined;
    id: string| null | undefined;
}

export interface BookingDTO {
    eventId: string;
    name: string;
    email: string;
    description: string;
}