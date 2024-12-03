export interface UserLog {
    _id: string;
    userId: {
      _id: string;
      userName: string;
      role: string;
    };
    activity: string;
    status: string;
    date:string;
    time:string
    action: string;
    __v: number;
  }