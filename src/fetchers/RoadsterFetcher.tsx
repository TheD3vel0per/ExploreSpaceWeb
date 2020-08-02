class RoadsterFetcher {

    constructor() { }

    async getRoadster() {
        const result = await this.fetchRoadster();
        return result;
    }

    private async fetchRoadster() {
        const today = this.formatDate(new Date());

        const url = 'https://api.spacexdata.com/v3/roadster';

        const response = await fetch(url);
        const json = await response.json();

        return json;
    }


    private formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }
}

export default RoadsterFetcher;