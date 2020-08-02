class AsteroidFetcher {

    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async getAsteroids() {

        // Fetch if localStorage is nulled
        if (localStorage.getItem('asteroids-time') === null) {
            const results = await this.fetchAsteroids();
            localStorage.setItem('asteroids', JSON.stringify(results));
            localStorage.setItem('asteroids-time', `${new Date()}`)
            return results;
        }

        // Get from storage if last fetch was recent
        if (new Date(localStorage.getItem('asteroids-time') as string).getTime() < 1000 * 60 * 60) {
            return localStorage.getItem('asteroids');
        }

        // Just fetch and store
        const results = await this.fetchAsteroids();
        localStorage.setItem('asteroids', JSON.stringify(results));
        localStorage.setItem('asteroids-time', `${new Date()}`)
        return results;
    }

    private async fetchAsteroids() {

        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);

        const todayFormatted = this.formatDate(today);
        const yesterdayFormatted = this.formatDate(yesterday);

        const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + yesterdayFormatted + '&end_date=' + todayFormatted +'&api_key=' + this.apiKey;
        
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

export default AsteroidFetcher;