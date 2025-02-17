interface BaseTargetData {
    month: string;
    year:string;
    target: number;
    targetType?:string;
    region?: string;
    area?: string;
    bda?: string;
  }
  
  export type TargetData = BaseTargetData;