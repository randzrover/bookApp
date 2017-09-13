export class GIS{
    spatialReference:SpatialReference;
    candidates: Candidates;
}

export class SpatialReference{
    wkid: number;
    latestWkid: number;
}

export class Candidates{
    address: string;
    location: Location;
    score: number;
    attributes: Attributes;
    extent: Extent;
}

export class Location{
    x: number;
    y: number;
}

export class Attributes{
    StName: string;
    City: string;
    Subregrion: string;
    Postal: string;
    Country: string;
}

export class Extent{
    xmin: number;
    ymin: number;
    xmax: number;
    ymax:number;
}