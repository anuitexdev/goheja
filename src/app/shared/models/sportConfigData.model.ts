export default class SportConfigData {
    constructor() {
        this.userId = '';
        this.runningConf = [{
            thresholdpace: '',
            lactateThreshold: '',
            powerThreshold: '',
            fiveK: '',
            tenK: '',
            halfMarathon: '',
            fullMarathon: '',
        }];
        this.swimmingConf = [{   
            thresholdpace: '',
            is1000m: '',
            powerThreshold: '',
        }
        ]; 
        this.cyclingConf = [{
            cyclingFtp: '',
            lactateThreshold: '',
            powerThreshold: '',
        }];
    }

    userId: string;
    runningConf: [
        {
            thresholdpace: string;
            lactateThreshold: string;
            powerThreshold: string;
            fiveK: string;
            tenK: string;
            halfMarathon: string;
            fullMarathon: string;
        }
    ];
    swimmingConf: [
        {
            thresholdpace: string;
            is1000m: string;
            powerThreshold: string;
        }
    ];
    cyclingConf: [
        {
            cyclingFtp: string,
            lactateThreshold: string,
            powerThreshold: string, 
        }
    ]
}