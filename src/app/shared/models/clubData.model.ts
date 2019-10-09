export default class ClubDataModel{
    constructor() {
        this.name = '';
        this.code = '';
        this.lat = 0;
        this.lng = 0;
        this.radius = 0;
        this.imgPath = '';
        this.weekWorkDays = [];
        this.startOfDay = 0;
        this.endOfDay = 0;
        this.firstDayInWeek = 0;
    }
    name:  any;
    code: string;
    lat: number;
    lng: number;
    radius: number;
    imgPath:  string;
    weekWorkDays: any[];
    startOfDay: number;
    endOfDay: number;
    firstDayInWeek: number;

  }
  