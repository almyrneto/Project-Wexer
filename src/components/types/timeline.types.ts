import { OccurrenceProps } from "./occurrence.types";

export type TimelineProps = {
        timeline: {
                "patientId": string,
                "occurrences": OccurrenceProps[],
                "serviceName": string,
                "_id": string,
                "createdOn": string,
                "modifiedOn": string,
        };
        
}