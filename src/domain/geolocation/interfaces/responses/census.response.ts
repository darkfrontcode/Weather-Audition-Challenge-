export interface ICensusResponse {
  result: {
    addressMatches: {
      coordinates: {
        x: number;
        y: number;
      };
    }[];
  };
}
