export interface MeteorsData {
  element_count: string,
  near_earth_objects: MeteorData []
}

export interface MeteorData {
  id: string;
  name: string;
  estimated_diameter: {
    meters: EstimatedDiameter;
  };
  is_potentially_hazardous_asteroid: string;
  close_approach_data: CloseApproachData[];
}

export interface EstimatedDiameter {
  estimated_diameter_min: string;
  estimated_diameter_max: string;
}

export interface CloseApproachData {
  close_approach_date_full: string;
  relative_velocity: {
    kilometers_per_second: string
  };
}

export interface MeteorRequest {
  date?: string;
  count?: string;
  hasDangerousMeteors?: string;
}

export interface MeteorResponse {
  meteors: MeteorData[];
  hasDangerousMeteors: boolean;
  count: number;
}